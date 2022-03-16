
/**
 * Module dependencies.
 */

import { obfuscate } from './request-obfuscator';
import request from 'request';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module '@uph... Remove this comment to see the full error message
import requestLogger from '@uphold/request-logger';

/**
 * Exports.
 */

export default (logger: any) => requestLogger(request, (request: any, instance: any) => {
  obfuscate(request, instance);

  if (request.type === 'response') {
    return logger.debug({ request }, `Received response for request ${request.id}`);
  }

  return logger.debug({ request }, `Making request ${request.id} to ${request.method} ${request.uri}`);
});
