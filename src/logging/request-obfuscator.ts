
/**
 * Module dependencies.
 */

import { assign, defaults, get, has, isArray, isEmpty, isPlainObject, isString, map, mapKeys } from 'lodash';
import methods from '../methods';

/**
 * Map all methods to lowercase.
 */

const lowercaseMethods = mapKeys(methods, (value: any, key: any) => key.toLowerCase());

/**
 * Obfuscate the response body.
 */

function obfuscateResponseBody(body: any, method: any) {
  const fn = get(lowercaseMethods[method], 'obfuscate.response');

  if (!fn || isEmpty(body.result)) {
    return body;
  }

  return defaults({ result: fn(body.result) }, body);
}

/**
 * Obfuscate the response.
 */

function obfuscateResponse(request: any, instance: any) {
  if (request.type !== 'response') {
    return;
  }

  if (!request.body) {
    return;
  }

  if (get(request, `headers['content-type']`) === 'application/octet-stream') {
    request.body = '******';

    return;
  }

  if (!instance.body) {
    return;
  }

  request.body = JSON.parse(request.body);

  const requestBody = JSON.parse(instance.body);

  if (isArray(request.body)) {
    const methodsById = mapKeys(requestBody, (method: any) => method.id);

    request.body = map(request.body, (request: any) => obfuscateResponseBody(request, methodsById[request.id].method));
  } else {
    request.body = obfuscateResponseBody(request.body, requestBody.method);
  }

  request.body = JSON.stringify(request.body);
}

/**
 * Obfuscate the request body.
 */

function obfuscateRequestBody(body: any) {
  const method = get(lowercaseMethods[body.method], 'obfuscate.request');

  if (!method) {
    return body;
  }

  if (isPlainObject(body.params)) {
    return assign(body, { params: method.named(body.params) });
  }

  return assign(body, { params: method.default(body.params) });
}

/**
 * Obfuscate the request.
 */

function obfuscateRequest(request: any) {
  if (request.type !== 'request') {
    return;
  }

  if (!isString(request.body)) {
    return;
  }

  request.body = JSON.parse(request.body);

  if (isArray(request.body)) {
    request.body = map(request.body, obfuscateRequestBody);
  } else {
    request.body = obfuscateRequestBody(request.body);
  }

  request.body = JSON.stringify(request.body);
}

/**
 * Obfuscate headers.
 */

function obfuscateHeaders(request: any) {
  if (request.type !== 'request') {
    return;
  }

  if (!has(request, 'headers.authorization')) {
    return;
  }

  request.headers.authorization = request.headers.authorization.replace(/(Basic )(.*)/, `$1******`);
}

/**
 * Export `RequestObfuscator`.
 */

export function obfuscate(request: any, instance: any) {
  obfuscateHeaders(request);
  obfuscateRequest(request);
  obfuscateResponse(request, instance);
}
