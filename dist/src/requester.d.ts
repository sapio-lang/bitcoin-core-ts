/**
 * Module dependencies.
 */
/**
 * Export Requester class.
 */
export default class Requester {
    methods: any;
    version: any;
    constructor({ methods, version }?: any);
    /**
    * Prepare rpc request.
    */
    prepare({ method, parameters, suffix }: any): {
        id: string;
        method: any;
        params: any;
    };
}
//# sourceMappingURL=requester.d.ts.map