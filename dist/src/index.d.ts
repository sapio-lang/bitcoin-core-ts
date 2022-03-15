/**
 * Module dependencies.
 */
/**
 * Constructor.
 */
declare class Client {
    agentOptions: any;
    auth: any;
    hasNamedParametersSupport: any;
    headers: any;
    host: any;
    methods: any;
    parser: any;
    password: any;
    port: any;
    request: any;
    requester: any;
    ssl: any;
    timeout: any;
    version: any;
    wallet: any;
    constructor({ agentOptions, headers, host, logger, network, password, port, ssl, timeout, username, version, wallet }?: any);
    /**
     * Execute `rpc` command.
     */
    command(...args: any[]): Promise<any>;
    /**
     * Given a transaction hash, returns a transaction in binary, hex-encoded binary, or JSON formats.
     */
    getTransactionByHash(hash: any, { extension }?: {
        extension?: string | undefined;
    }): Promise<any>;
    /**
     * Given a block hash, returns a block, in binary, hex-encoded binary or JSON formats.
     * With `summary` set to `false`, the JSON response will only contain the transaction
     * hash instead of the complete transaction details. The option only affects the JSON response.
     */
    getBlockByHash(hash: any, { summary, extension }?: {
        summary?: boolean | undefined;
        extension?: string | undefined;
    }): Promise<any>;
    /**
     * Given a block hash, returns amount of blockheaders in upward direction.
     */
    getBlockHeadersByHash(hash: any, count: any, { extension }?: {
        extension?: string | undefined;
    }): Promise<any>;
    /**
     * Returns various state info regarding block chain processing.
     * Only supports JSON as output format.
     */
    getBlockchainInformation(): Promise<any>;
    /**
     * Query unspent transaction outputs for a given set of outpoints.
     * See BIP64 for input and output serialisation:
     * 	 - https://github.com/bitcoin/bips/blob/master/bip-0064.mediawiki
     */
    getUnspentTransactionOutputs(outpoints: any, { extension }?: {
        extension?: string | undefined;
    }): Promise<any>;
    /**
     * Returns transactions in the transaction memory pool.
     * Only supports JSON as output format.
     */
    getMemoryPoolContent(): Promise<any>;
    /**
     * Returns various information about the transaction memory pool.
     * Only supports JSON as output format.
     *
     *   - size: the number of transactions in the transaction memory pool.
     *   - bytes: size of the transaction memory pool in bytes.
     *   - usage: total transaction memory pool memory usage.
     */
    getMemoryPoolInformation(): Promise<any>;
}
/**
 * Export Client class (ESM).
 */
export default Client;
//# sourceMappingURL=index.d.ts.map