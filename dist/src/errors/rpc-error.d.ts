/**
 * Module dependencies.
 */
import StandardError from './standard-error';
/**
 * Export `RpcError` class.
 */
export default class RpcError extends StandardError {
    code: any;
    message: any;
    name: any;
    constructor(code: any, msg: any, props?: {});
    get status(): any;
    set status(value: any);
    toString(): string;
}
//# sourceMappingURL=rpc-error.d.ts.map