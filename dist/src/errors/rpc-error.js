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

const http_1 = require("http");

const standard_error_1 = __importDefault(require("./standard-error"));
/**
 * Export `RpcError` class.
 */

class RpcError extends standard_error_1.default {
  constructor(code, msg, props = {}) {
    if (typeof code != "number") {
      throw new TypeError(`Non-numeric HTTP code`);
    }

    if (typeof msg == "object" && msg !== null) {
      props = msg;
      msg = null;
    } // @ts-expect-error ts-migrate(2339) FIXME: Property 'code' does not exist on type '{}'.

    props.code = code;
    super(msg || http_1.STATUS_CODES[code], props);
  }

  get status() {
    return this.code;
  }

  set status(value) {
    Object.defineProperty(this, "status", {
      configurable: true,
      enumerable: true,
      value,
      writable: true,
    });
  }

  toString() {
    return `${this.name}: ${this.code} ${this.message}`;
  }
}

exports.default = RpcError;
