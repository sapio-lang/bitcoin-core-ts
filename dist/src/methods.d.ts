import { Range } from "semver";
/**
 * Export available rpc methods.
 */
declare type Categories =
  | "wallet"
  | "network"
  | "blockchain"
  | "rawtransactions"
  | "util"
  | "mining"
  | "control"
  | "generating"
  | "logging";
export declare type Feature = "multiwallet";
export declare type Method = {
  category: Categories;
  features?:
    | {}
    | Record<
        Feature,
        | Range
        | {
            supported: boolean;
          }
      >;
  version: Range;
  obfuscate?: {
    request?: {
      default: (params: any) => void;
      named: (params: any) => void;
    };
    response?: () => string;
  };
  supported?: boolean;
};
export declare type MethodName = keyof typeof methods;
export declare type Methods = Record<string, Method>;
export declare const methods: Methods;
export default methods;
//# sourceMappingURL=methods.d.ts.map
