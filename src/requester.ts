
/**
 * Module dependencies.
 */

// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import { get } from 'lodash';

/**
 * Export Requester class.
 */

export default class Requester {
  methods: any;
  version: any;
  constructor({
    methods = {},
    version
  }: any = {}) {
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
  }: any) {
    method = method.toLowerCase();

    if (this.version && !get(this.methods[method], 'supported', false)) {
      throw new Error(`Method "${method}" is not supported by version "${this.version}"`);
    }

    return {
      id: `${Date.now()}${suffix !== undefined ? `-${suffix}` : ''}`,
      method,
      params: parameters
    };
  }
}
