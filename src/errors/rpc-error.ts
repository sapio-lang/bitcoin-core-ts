
/**
 * Module dependencies.
 */

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'http' or its corresponding typ... Remove this comment to see the full error message
import { STATUS_CODES } from 'http';
import StandardError from './standard-error';

/**
 * Export `RpcError` class.
 */

export default class RpcError extends StandardError {
  code: any;
  message: any;
  name: any;
  constructor(code: any, msg: any, props = {}) {
    if (typeof code != 'number') {
      throw new TypeError(`Non-numeric HTTP code`);
    }

    if (typeof msg == 'object' && msg !== null) {
      props = msg;
      msg = null;
    }

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'code' does not exist on type '{}'.
    props.code = code;

    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    super(msg || STATUS_CODES[code], props);
  }

  get status() {
    return this.code;
  }

  set status(value) {
    Object.defineProperty(this, 'status', {
      configurable: true,
      enumerable: true,
      value,
      writable: true
    });
  }

  toString() {
    return `${this.name}: ${this.code} ${this.message}`;
  }
}
