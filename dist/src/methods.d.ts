declare const _default: {
    abandonTransaction: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    abortRescan: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    addMultiSigAddress: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    addNode: {
        category: string;
        version: string;
    };
    addWitnessAddress: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    analyzePsbt: {
        category: string;
        version: string;
    };
    backupWallet: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    bumpFee: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    clearBanned: {
        category: string;
        version: string;
    };
    combinePsbt: {
        category: string;
        version: string;
    };
    combineRawTransaction: {
        category: string;
        version: string;
    };
    convertToPsbt: {
        category: string;
        version: string;
    };
    createMultiSig: {
        category: string;
        version: string;
    };
    createPsbt: {
        category: string;
        version: string;
    };
    createRawTransaction: {
        category: string;
        version: string;
    };
    createWallet: {
        category: string;
        version: string;
    };
    createWitnessAddress: {
        category: string;
        version: string;
    };
    decodePsbt: {
        category: string;
        version: string;
    };
    decodeRawTransaction: {
        category: string;
        version: string;
    };
    decodeScript: {
        category: string;
        version: string;
    };
    deriveAddresses: {
        category: string;
        version: string;
    };
    disconnectNode: {
        category: string;
        version: string;
    };
    dumpPrivKey: {
        category: string;
        features: {
            multiwallet: string;
        };
        obfuscate: {
            response: () => string;
        };
        version: string;
    };
    dumpWallet: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    encryptWallet: {
        category: string;
        features: {
            multiwallet: string;
        };
        obfuscate: {
            request: {
                default: (params: any) => any;
                named: (params: any) => any;
            };
        };
        version: string;
    };
    estimateFee: {
        category: string;
        version: string;
    };
    estimatePriority: {
        category: string;
        version: string;
    };
    estimateSmartFee: {
        category: string;
        version: string;
    };
    estimateSmartPriority: {
        category: string;
        version: string;
    };
    finalizePsbt: {
        category: string;
        version: string;
    };
    fundRawTransaction: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    generate: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    generateToAddress: {
        category: string;
        version: string;
    };
    getAccount: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getAccountAddress: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getAddedNodeInfo: {
        category: string;
        version: string;
    };
    getAddressInfo: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getAddressesByAccount: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getAddressesByLabel: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getBalance: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getBestBlockHash: {
        category: string;
        version: string;
    };
    getBlock: {
        category: string;
        version: string;
    };
    getBlockCount: {
        category: string;
        version: string;
    };
    getBlockHash: {
        category: string;
        version: string;
    };
    getBlockHeader: {
        category: string;
        version: string;
    };
    getBlockStats: {
        category: string;
        version: string;
    };
    getBlockTemplate: {
        category: string;
        version: string;
    };
    getBlockchainInfo: {
        category: string;
        version: string;
    };
    getChainTips: {
        category: string;
        version: string;
    };
    getChainTxStats: {
        category: string;
        version: string;
    };
    getConnectionCount: {
        category: string;
        version: string;
    };
    getDescriptorInfo: {
        category: string;
        version: string;
    };
    getDifficulty: {
        category: string;
        version: string;
    };
    getGenerate: {
        category: string;
        version: string;
    };
    getHashesPerSec: {
        category: string;
        version: string;
    };
    getInfo: {
        category: string;
        version: string;
    };
    getMemoryInfo: {
        category: string;
        version: string;
    };
    getMempoolAncestors: {
        category: string;
        version: string;
    };
    getMempoolDescendants: {
        category: string;
        version: string;
    };
    getMempoolEntry: {
        category: string;
        version: string;
    };
    getMempoolInfo: {
        category: string;
        version: string;
    };
    getMiningInfo: {
        category: string;
        version: string;
    };
    getNetTotals: {
        category: string;
        version: string;
    };
    getNetworkHashPs: {
        category: string;
        version: string;
    };
    getNetworkInfo: {
        category: string;
        version: string;
    };
    getNewAddress: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getNodeAddresses: {
        category: string;
        version: string;
    };
    getPeerInfo: {
        category: string;
        version: string;
    };
    getRawChangeAddress: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getRawMempool: {
        category: string;
        version: string;
    };
    getRawTransaction: {
        category: string;
        version: string;
    };
    getReceivedByAccount: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getReceivedByAddress: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getReceivedByLabel: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getRpcInfo: {
        category: string;
        version: string;
    };
    getTransaction: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getTxOut: {
        category: string;
        version: string;
    };
    getTxOutProof: {
        category: string;
        version: string;
    };
    getTxOutSetInfo: {
        category: string;
        version: string;
    };
    getUnconfirmedBalance: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getWalletInfo: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    getWork: {
        category: string;
        version: string;
    };
    getZmqNotifications: {
        category: string;
        version: string;
    };
    help: {
        category: string;
        version: string;
    };
    importAddress: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    importMulti: {
        category: string;
        features: {
            multiwallet: string;
        };
        obfuscate: {
            request: {
                default: (params: any) => any;
                named: (params: any) => any;
            };
        };
        version: string;
    };
    importPrivKey: {
        category: string;
        features: {
            multiwallet: string;
        };
        obfuscate: {
            request: {
                default: () => string[];
                named: (params: any) => any;
            };
        };
        version: string;
    };
    importPrunedFunds: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    importPubKey: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    importWallet: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    joinPsbts: {
        category: string;
        version: string;
    };
    keypoolRefill: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listAccounts: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listAddressGroupings: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listBanned: {
        category: string;
        version: string;
    };
    listLabels: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listLockUnspent: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listReceivedByAccount: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listReceivedByAddress: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listReceivedByLabel: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listSinceBlock: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listTransactions: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listUnspent: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    listWalletDir: {
        category: string;
        version: string;
    };
    listWallets: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    loadWallet: {
        category: string;
        version: string;
    };
    lockUnspent: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    logging: {
        version: string;
    };
    move: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    ping: {
        category: string;
        version: string;
    };
    preciousBlock: {
        category: string;
        version: string;
    };
    prioritiseTransaction: {
        category: string;
        version: string;
    };
    pruneBlockchain: {
        category: string;
        version: string;
    };
    removePrunedFunds: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    rescanBlockchain: {
        category: string;
        version: string;
    };
    saveMempool: {
        category: string;
        version: string;
    };
    scantxoutset: {
        category: string;
        version: string;
    };
    sendFrom: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    sendMany: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    sendRawTransaction: {
        category: string;
        version: string;
    };
    sendToAddress: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    setAccount: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    setBan: {
        category: string;
        version: string;
    };
    setGenerate: {
        category: string;
        version: string;
    };
    setHdSeed: {
        category: string;
        features: {
            multiwallet: string;
        };
        obfuscate: {
            request: {
                default: (params: any) => any;
                named: (params: any) => any;
            };
        };
        version: string;
    };
    setLabel: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    setNetworkActive: {
        category: string;
        version: string;
    };
    setTxFee: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    signMessage: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    signMessageWithPrivKey: {
        category: string;
        obfuscate: {
            request: {
                default: (params: any) => any;
                named: (params: any) => any;
            };
        };
        version: string;
    };
    signRawTransaction: {
        category: string;
        obfuscate: {
            request: {
                default: (params: any) => any;
                named: (params: any) => any;
            };
        };
        version: string;
    };
    signRawTransactionWithKey: {
        category: string;
        obfuscate: {
            request: {
                default: (params: any) => any;
                named: (params: any) => any;
            };
        };
        version: string;
    };
    signRawTransactionWithWallet: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    stop: {
        category: string;
        version: string;
    };
    submitBlock: {
        category: string;
        version: string;
    };
    testMempoolAccept: {
        category: string;
        version: string;
    };
    unloadWallet: {
        category: string;
        version: string;
    };
    upTime: {
        category: string;
        version: string;
    };
    utxoUpdatePsbt: {
        category: string;
        version: string;
    };
    validateAddress: {
        category: string;
        version: string;
    };
    verifyChain: {
        category: string;
        version: string;
    };
    verifyMessage: {
        category: string;
        version: string;
    };
    verifyTxOutProof: {
        category: string;
        version: string;
    };
    walletCreateFundedPsbt: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    walletLock: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
    walletPassphrase: {
        category: string;
        features: {
            multiwallet: string;
        };
        obfuscate: {
            request: {
                default: (params: any) => any;
                named: (params: any) => any;
            };
        };
        version: string;
    };
    walletPassphraseChange: {
        category: string;
        features: {
            multiwallet: string;
        };
        obfuscate: {
            request: {
                default: (params: any) => any;
                named: (params: any) => any;
            };
        };
        version: string;
    };
    walletProcessPsbt: {
        category: string;
        features: {
            multiwallet: string;
        };
        version: string;
    };
};
/**
 * Export available rpc methods.
 */
export default _default;
//# sourceMappingURL=methods.d.ts.map