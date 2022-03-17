/**
 * Module dependencies.
 */
import { MethodName, Methods } from "./methods";
import { SemVer } from "semver";
/**
 * Export Requester class.
 */
export default class Requester {
  methods: Methods;
  version: SemVer | undefined;
  constructor({ methods, version }?: { methods?: Methods; version?: SemVer });
  /**
   * Prepare rpc request.
   */
  prepare({
    method,
    parameters,
    suffix,
  }: {
    method: MethodName;
    parameters: any[];
    suffix: string;
  }): {
    id: string;
    method: string;
    params: any[];
  };
}
//# sourceMappingURL=requester.d.ts.map
