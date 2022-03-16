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

const request_obfuscator_1 = require("./request-obfuscator");

const request_1 = __importDefault(require("request")); // @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module '@uph... Remove this comment to see the full error message

const request_logger_1 = __importDefault(require("@uphold/request-logger"));
/**
 * Exports.
 */

exports.default = (logger) =>
  (0, request_logger_1.default)(request_1.default, (request, instance) => {
    (0, request_obfuscator_1.obfuscate)(request, instance);

    if (request.type === "response") {
      return logger.debug(
        {
          request,
        },
        `Received response for request ${request.id}`
      );
    }

    return logger.debug(
      {
        request,
      },
      `Making request ${request.id} to ${request.method} ${request.uri}`
    );
  });
