"use strict";
/**
 * Module dependencies.
 */

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'stan... Remove this comment to see the full error message

const standard_error_1 = __importDefault(require("standard-error"));
/**
 * Export `StandardError` class.
 */


class StandardError extends standard_error_1.default {}

exports.default = StandardError;