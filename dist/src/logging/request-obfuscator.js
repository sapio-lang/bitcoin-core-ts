"use strict";
/**
 * Module dependencies.
 */

var __importDefault =
  (void 0 && (void 0).__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.obfuscate = void 0;

const lodash_1 = require("lodash");

const methods_1 = __importDefault(require("../methods"));
/**
 * Map all methods to lowercase.
 */

const lowercaseMethods = (0, lodash_1.mapKeys)(
  methods_1.default,
  (value, key) => key.toLowerCase()
);
/**
 * Obfuscate the response body.
 */

function obfuscateResponseBody(body, method) {
  const fn = (0, lodash_1.get)(lowercaseMethods[method], "obfuscate.response");

  if (!fn || (0, lodash_1.isEmpty)(body.result)) {
    return body;
  }

  return (0, lodash_1.defaults)(
    {
      result: fn(body.result),
    },
    body
  );
}
/**
 * Obfuscate the response.
 */

function obfuscateResponse(request, instance) {
  if (request.type !== "response") {
    return;
  }

  if (!request.body) {
    return;
  }

  if (
    (0, lodash_1.get)(request, `headers['content-type']`) ===
    "application/octet-stream"
  ) {
    request.body = "******";
    return;
  }

  if (!instance.body) {
    return;
  }

  request.body = JSON.parse(request.body);
  const requestBody = JSON.parse(instance.body);

  if ((0, lodash_1.isArray)(request.body)) {
    const methodsById = (0, lodash_1.mapKeys)(
      requestBody,
      (method) => method.id
    );
    request.body = (0, lodash_1.map)(request.body, (request) =>
      obfuscateResponseBody(request, methodsById[request.id].method)
    );
  } else {
    request.body = obfuscateResponseBody(request.body, requestBody.method);
  }

  request.body = JSON.stringify(request.body);
}
/**
 * Obfuscate the request body.
 */

function obfuscateRequestBody(body) {
  const method = (0, lodash_1.get)(
    lowercaseMethods[body.method],
    "obfuscate.request"
  );

  if (!method) {
    return body;
  }

  if ((0, lodash_1.isPlainObject)(body.params)) {
    return (0, lodash_1.assign)(body, {
      params: method.named(body.params),
    });
  }

  return (0, lodash_1.assign)(body, {
    params: method.default(body.params),
  });
}
/**
 * Obfuscate the request.
 */

function obfuscateRequest(request) {
  if (request.type !== "request") {
    return;
  }

  if (!(0, lodash_1.isString)(request.body)) {
    return;
  }

  request.body = JSON.parse(request.body);

  if ((0, lodash_1.isArray)(request.body)) {
    request.body = (0, lodash_1.map)(request.body, obfuscateRequestBody);
  } else {
    request.body = obfuscateRequestBody(request.body);
  }

  request.body = JSON.stringify(request.body);
}
/**
 * Obfuscate headers.
 */

function obfuscateHeaders(request) {
  if (request.type !== "request") {
    return;
  }

  if (!(0, lodash_1.has)(request, "headers.authorization")) {
    return;
  }

  request.headers.authorization = request.headers.authorization.replace(
    /(Basic )(.*)/,
    `$1******`
  );
}
/**
 * Export `RequestObfuscator`.
 */

function obfuscate(request, instance) {
  obfuscateHeaders(request);
  obfuscateRequest(request);
  obfuscateResponse(request, instance);
}

exports.obfuscate = obfuscate;
