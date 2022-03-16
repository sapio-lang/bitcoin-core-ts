
/**
 * Module dependencies.
 */

import { MethodName, Methods } from './methods';
import { SemVer } from 'semver';
import { get } from 'lodash';

/**
 * Export Requester class.
 */

export default class Requester {
  methods: Methods;
  version: SemVer | undefined;
  constructor({
    methods = {},
    version
  }: { methods?: Methods, version?: SemVer } = {}) {
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
  }: { method: MethodName, parameters: any[], suffix: string }) {
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
