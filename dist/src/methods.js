"use strict";
/* eslint-disable no-inline-comments */

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.methods = void 0;
/**
 * Module dependencies.
 */

const lodash_1 = require("lodash");

const semver_1 = require("semver");

exports.methods = {
  abandonTransaction: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.12.0"),
  },
  abortRescan: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.15.0"),
  },
  addMultiSigAddress: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  addNode: {
    category: "network",
    version: new semver_1.Range(">=0.8.0"),
  },
  addWitnessAddress: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.13.0 <0.18.0"),
  },
  analyzePsbt: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.18.0"),
  },
  backupWallet: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.3.12"),
  },
  bumpFee: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.14.0"),
  },
  clearBanned: {
    category: "network",
    version: new semver_1.Range(">=0.12.0"),
  },
  combinePsbt: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.17.0"),
  },
  combineRawTransaction: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.15.0"),
  },
  convertToPsbt: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.17.0"),
  },
  createMultiSig: {
    category: "util",
    version: new semver_1.Range(">=0.1.0"),
  },
  createPsbt: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.17.0"),
  },
  createRawTransaction: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.7.0"),
  },
  createWallet: {
    category: "wallet",
    version: new semver_1.Range(">=0.17.0"),
  },
  createWitnessAddress: {
    category: "wallet",
    version: new semver_1.Range("=0.13.0"),
  },
  decodePsbt: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.17.0"),
  },
  decodeRawTransaction: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.7.0"),
  },
  decodeScript: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.9.0"),
  },
  deriveAddresses: {
    category: "util",
    version: new semver_1.Range(">=0.18.0"),
  },
  disconnectNode: {
    category: "network",
    version: new semver_1.Range(">=0.12.0"),
  },
  dumpPrivKey: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    obfuscate: {
      response: () => "******",
    },
    version: new semver_1.Range(">=0.6.0"),
  },
  dumpWallet: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.9.0"),
  },
  encryptWallet: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    obfuscate: {
      request: {
        default: (params) => (0, lodash_1.set)([...params], "[0]", "******"),
        named: (params) => (0, lodash_1.set)(params, "passphrase", "******"),
      },
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  estimateFee: {
    category: "util",
    version: new semver_1.Range(">=0.10.0"),
  },
  estimatePriority: {
    category: "util",
    version: new semver_1.Range(">=0.10.0 <0.15.0"),
  },
  estimateSmartFee: {
    category: "util",
    version: new semver_1.Range(">=0.12.0"),
  },
  estimateSmartPriority: {
    category: "util",
    version: new semver_1.Range(">=0.12.0 <0.15.0"),
  },
  finalizePsbt: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.17.0"),
  },
  fundRawTransaction: {
    category: "rawtransactions",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.12.0"),
  },
  generate: {
    category: "generating",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.11.0"),
  },
  generateToAddress: {
    category: "generating",
    version: new semver_1.Range(">=0.13.0"),
  },
  getAccount: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0 <0.18.0"),
    },
    version: new semver_1.Range(">=0.1.0 <0.18.0"),
  },
  getAccountAddress: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0 <0.18.0"),
    },
    version: new semver_1.Range(">=0.3.18 <0.18.0"),
  },
  getAddedNodeInfo: {
    category: "network",
    version: new semver_1.Range(">=0.8.0"),
  },
  getAddressInfo: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.17.0"),
    },
    version: new semver_1.Range(">=0.17.0"),
  },
  getAddressesByAccount: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0 <0.18.0"),
    },
    version: new semver_1.Range(">=0.1.0 <0.18.0"),
  },
  getAddressesByLabel: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.17.0"),
    },
    version: new semver_1.Range(">=0.17.0"),
  },
  getBalance: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.3.18"),
  },
  getBestBlockHash: {
    category: "blockchain",
    version: new semver_1.Range(">=0.9.0"),
  },
  getBlock: {
    category: "blockchain",
    version: new semver_1.Range(">=0.6.0"),
  },
  getBlockCount: {
    category: "blockchain",
    version: new semver_1.Range(">=0.1.0"),
  },
  getBlockHash: {
    category: "blockchain",
    version: new semver_1.Range(">=0.6.0"),
  },
  getBlockHeader: {
    category: "blockchain",
    version: new semver_1.Range(">=0.12.0"),
  },
  getBlockStats: {
    category: "blockchain",
    version: new semver_1.Range(">=0.17.0"),
  },
  getBlockTemplate: {
    category: "mining",
    version: new semver_1.Range(">=0.7.0"),
  },
  getBlockchainInfo: {
    category: "blockchain",
    version: new semver_1.Range(">=0.9.2"),
  },
  getChainTips: {
    category: "blockchain",
    version: new semver_1.Range(">=0.10.0"),
  },
  getChainTxStats: {
    category: "blockchain",
    version: new semver_1.Range(">=0.15.0"),
  },
  getConnectionCount: {
    category: "network",
    version: new semver_1.Range(">=0.1.0"),
  },
  getDescriptorInfo: {
    category: "util",
    version: new semver_1.Range(">=0.18.0"),
  },
  getDifficulty: {
    category: "blockchain",
    version: new semver_1.Range(">=0.1.0"),
  },
  getGenerate: {
    category: "generating",
    version: new semver_1.Range("<0.13.0"),
  },
  getHashesPerSec: {
    category: "blockchain",
    version: new semver_1.Range("<0.10.0"),
  },
  getInfo: {
    category: "control",
    version: new semver_1.Range(">=0.1.0 <0.16.0"),
  },
  getMemoryInfo: {
    category: "control",
    version: new semver_1.Range(">=0.14.0"),
  },
  getMempoolAncestors: {
    category: "blockchain",
    version: new semver_1.Range(">=0.13.0"),
  },
  getMempoolDescendants: {
    category: "blockchain",
    version: new semver_1.Range(">=0.13.0"),
  },
  getMempoolEntry: {
    category: "blockchain",
    version: new semver_1.Range(">=0.13.0"),
  },
  getMempoolInfo: {
    category: "blockchain",
    version: new semver_1.Range(">=0.10.0"),
  },
  getMiningInfo: {
    category: "mining",
    version: new semver_1.Range(">=0.6.0"),
  },
  getNetTotals: {
    category: "network",
    version: new semver_1.Range(">=0.1.0"),
  },
  getNetworkHashPs: {
    category: "mining",
    version: new semver_1.Range(">=0.9.0"),
  },
  getNetworkInfo: {
    category: "network",
    version: new semver_1.Range(">=0.9.2"),
  },
  getNewAddress: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  getNodeAddresses: {
    category: "network",
    version: new semver_1.Range(">=0.18.0"),
  },
  getPeerInfo: {
    category: "network",
    version: new semver_1.Range(">=0.7.0"),
  },
  getRawChangeAddress: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.9.0"),
  },
  getRawMempool: {
    category: "blockchain",
    version: new semver_1.Range(">=0.7.0"),
  },
  getRawTransaction: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.7.0"),
  },
  getReceivedByAccount: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0 <0.18.0"),
    },
    version: new semver_1.Range(">=0.1.0 <0.18.0"),
  },
  getReceivedByAddress: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  getReceivedByLabel: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.17.0"),
    },
    version: new semver_1.Range(">=0.17.0"),
  },
  getRpcInfo: {
    category: "control",
    version: new semver_1.Range(">=0.18.0"),
  },
  getTransaction: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  getTxOut: {
    category: "blockchain",
    version: new semver_1.Range(">=0.7.0"),
  },
  getTxOutProof: {
    category: "blockchain",
    version: new semver_1.Range(">=0.11.0"),
  },
  getTxOutSetInfo: {
    category: "blockchain",
    version: new semver_1.Range(">=0.7.0"),
  },
  getUnconfirmedBalance: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.9.0"),
  },
  getWalletInfo: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.9.2"),
  },
  getWork: {
    category: "blockchain",
    version: new semver_1.Range("<0.10.0"),
  },
  getZmqNotifications: {
    category: "control",
    version: new semver_1.Range(">=0.17.0"),
  },
  help: {
    category: "control",
    version: new semver_1.Range(">=0.1.0"),
  },
  importAddress: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.10.0"),
  },
  importMulti: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    obfuscate: {
      request: {
        default: (params) =>
          (0, lodash_1.set)(
            params,
            "[0]",
            (0, lodash_1.map)(params[0], (request) =>
              (0, lodash_1.set)(
                request,
                "keys",
                (0, lodash_1.map)(request.keys, () => "******")
              )
            )
          ),
        named: (params) =>
          (0, lodash_1.set)(
            params,
            "requests",
            (0, lodash_1.map)(params.requests, (request) =>
              (0, lodash_1.set)(
                request,
                "keys",
                (0, lodash_1.map)(request.keys, () => "******")
              )
            )
          ),
      },
    },
    version: new semver_1.Range(">=0.14.0"),
  },
  importPrivKey: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    obfuscate: {
      request: {
        default: () => ["******"],
        named: (params) => (0, lodash_1.set)(params, "privkey", "******"),
      },
    },
    version: new semver_1.Range(">=0.6.0"),
  },
  importPrunedFunds: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.13.0"),
  },
  importPubKey: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.12.0"),
  },
  importWallet: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.9.0"),
  },
  joinPsbts: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.18.0"),
  },
  keypoolRefill: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  listAccounts: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0 <0.18.0"),
    },
    version: new semver_1.Range(">=0.1.0 <0.18.0"),
  },
  listAddressGroupings: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.7.0"),
  },
  listBanned: {
    category: "network",
    version: new semver_1.Range(">=0.12.0"),
  },
  listLabels: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.17.0"),
    },
    version: new semver_1.Range(">=0.17.0"),
  },
  listLockUnspent: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.8.0"),
  },
  listReceivedByAccount: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0 <0.18.0"),
    },
    version: new semver_1.Range(">=0.1.0 <0.18.0"),
  },
  listReceivedByAddress: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  listReceivedByLabel: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.17.0"),
    },
    version: new semver_1.Range(">=0.17.0"),
  },
  listSinceBlock: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.5.0"),
  },
  listTransactions: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.3.18"),
  },
  listUnspent: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.7.0"),
  },
  listWalletDir: {
    category: "wallet",
    version: new semver_1.Range(">=0.18.0"),
  },
  listWallets: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.15.0"),
  },
  loadWallet: {
    category: "wallet",
    version: new semver_1.Range(">=0.17.0"),
  },
  lockUnspent: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.8.0"),
  },
  logging: {
    category: "logging",
    version: new semver_1.Range(">=0.17.0"),
  },
  move: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.3.18"),
  },
  ping: {
    category: "network",
    version: new semver_1.Range(">=0.9.0"),
  },
  preciousBlock: {
    category: "blockchain",
    version: new semver_1.Range(">=0.14.0"),
  },
  prioritiseTransaction: {
    category: "mining",
    version: new semver_1.Range(">=0.10.0"),
  },
  pruneBlockchain: {
    category: "blockchain",
    version: new semver_1.Range(">=0.14.0"),
  },
  removePrunedFunds: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.13.0"),
  },
  rescanBlockchain: {
    category: "wallet",
    version: new semver_1.Range(">=0.16.0"),
  },
  saveMempool: {
    category: "blockchain",
    version: new semver_1.Range(">=0.16.0"),
  },
  scantxoutset: {
    category: "blockchain",
    version: new semver_1.Range("=>0.17.0"),
  },
  sendFrom: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.3.18"),
  },
  sendMany: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.3.21"),
  },
  sendRawTransaction: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.7.0"),
  },
  sendToAddress: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  setAccount: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0 <0.18.0"),
    },
    version: new semver_1.Range(">=0.1.0 <0.18.0"),
  },
  setBan: {
    category: "network",
    version: new semver_1.Range(">=0.12.0"),
  },
  setGenerate: {
    category: "generating",
    version: new semver_1.Range("<0.13.0"),
  },
  setHdSeed: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.17.0"),
    },
    obfuscate: {
      request: {
        default: (params) => (0, lodash_1.set)([...params], "[1]", "******"),
        named: (params) => (0, lodash_1.set)(params, "seed", "******"),
      },
    },
    version: new semver_1.Range(">=0.17.0"),
  },
  setLabel: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.17.0"),
    },
    version: new semver_1.Range(">=0.17.0"),
  },
  setNetworkActive: {
    category: "network",
    version: new semver_1.Range(">=0.14.0"),
  },
  setTxFee: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.3.22"),
  },
  signMessage: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.5.0"),
  },
  signMessageWithPrivKey: {
    category: "util",
    obfuscate: {
      request: {
        default: (params) => (0, lodash_1.set)([...params], "[0]", "******"),
        named: (params) => (0, lodash_1.set)(params, "privkey", "******"),
      },
    },
    version: new semver_1.Range(">=0.13.0"),
  },
  signRawTransaction: {
    category: "rawtransactions",
    obfuscate: {
      request: {
        default: (params) =>
          (0, lodash_1.set)(
            [...params],
            "[2]",
            (0, lodash_1.map)(params[2], () => "******")
          ),
        named: (params) =>
          (0, lodash_1.set)(
            params,
            "privkeys",
            (0, lodash_1.map)(params.privkeys || [], () => "******")
          ),
      },
    },
    version: new semver_1.Range(">=0.7.0 <0.18.0"),
  },
  signRawTransactionWithKey: {
    category: "rawtransactions",
    obfuscate: {
      request: {
        default: (params) =>
          (0, lodash_1.set)(
            [...params],
            "[1]",
            (0, lodash_1.map)(params[1], () => "******")
          ),
        named: (params) =>
          (0, lodash_1.set)(
            params,
            "privkeys",
            (0, lodash_1.map)(params.privkeys || [], () => "******")
          ),
      },
    },
    version: new semver_1.Range(">=0.17.0"),
  },
  signRawTransactionWithWallet: {
    category: "rawtransactions",
    features: {
      multiwallet: new semver_1.Range(">=0.17.0"),
    },
    version: new semver_1.Range(">=0.17.0"),
  },
  stop: {
    category: "control",
    version: new semver_1.Range(">=0.1.0"),
  },
  submitBlock: {
    category: "mining",
    version: new semver_1.Range(">=0.7.0"),
  },
  testMempoolAccept: {
    category: "blockchain",
    version: new semver_1.Range(">=0.17.0"),
  },
  unloadWallet: {
    category: "wallet",
    version: new semver_1.Range(">=0.17.0"),
  },
  upTime: {
    category: "control",
    version: new semver_1.Range(">=0.15.0"),
  },
  utxoUpdatePsbt: {
    category: "rawtransactions",
    version: new semver_1.Range(">=0.18.0"),
  },
  validateAddress: {
    category: "util",
    version: new semver_1.Range(">=0.3.14"),
  },
  verifyChain: {
    category: "blockchain",
    version: new semver_1.Range(">=0.9.0"),
  },
  verifyMessage: {
    category: "util",
    version: new semver_1.Range(">=0.5.0"),
  },
  verifyTxOutProof: {
    category: "blockchain",
    version: new semver_1.Range(">0.11.0"),
  },
  walletCreateFundedPsbt: {
    category: "rawtransactions",
    features: {
      multiwallet: new semver_1.Range(">=0.17.0"),
    },
    version: new semver_1.Range(">=0.17.0"),
  },
  walletLock: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  walletPassphrase: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    obfuscate: {
      request: {
        default: (params) => (0, lodash_1.set)([...params], "[0]", "******"),
        named: (params) => (0, lodash_1.set)(params, "passphrase", "******"),
      },
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  walletPassphraseChange: {
    category: "wallet",
    features: {
      multiwallet: new semver_1.Range(">=0.15.0"),
    },
    obfuscate: {
      request: {
        default: (params) =>
          (0, lodash_1.set)(
            (0, lodash_1.set)([...params], "[0]", "******"),
            "[1]",
            "******"
          ),
        named: (params) =>
          (0, lodash_1.set)(
            (0, lodash_1.set)(params, "oldpassphrase", "******"),
            "newpassphrase",
            "******"
          ),
      },
    },
    version: new semver_1.Range(">=0.1.0"),
  },
  walletProcessPsbt: {
    category: "rawtransactions",
    features: {
      multiwallet: new semver_1.Range(">=0.17.0"),
    },
    version: new semver_1.Range(">=0.17.0"),
  },
};
exports.default = exports.methods;
