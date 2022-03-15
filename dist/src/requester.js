"use strict";
/**
 * Module dependencies.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
}); // @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'loda... Remove this comment to see the full error message

const lodash_1 = require("lodash");
/**
 * Export Requester class.
 */


class Requester {
  constructor({
    methods = {},
    version
  } = {}) {
    this.methods = methods;
    this.version = version;
  }
  /**
  * Prepare rpc request.
  */


  prepare({
    method,
    parameters = [],
    suffix
  }) {
    method = method.toLowerCase();

    if (this.version && !(0, lodash_1.get)(this.methods[method], 'supported', false)) {
      throw new Error(`Method "${method}" is not supported by version "${this.version}"`);
    }

    return {
      id: `${Date.now()}${suffix !== undefined ? `-${suffix}` : ''}`,
      method,
      params: parameters
    };
  }

}

exports.default = Requester;