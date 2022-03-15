"use strict";
/**
 * Module dependencies.
 */

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const parser_1 = __importDefault(require("./parser"));

const requester_1 = __importDefault(require("./requester")); // @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'loda... Remove this comment to see the full error message


const lodash_1 = __importDefault(require("lodash")); // @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'debu... Remove this comment to see the full error message


const debugnyan_1 = __importDefault(require("debugnyan"));

const methods_1 = __importDefault(require("./methods"));

const request_logger_1 = __importDefault(require("./logging/request-logger")); // @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'semv... Remove this comment to see the full error message


const semver_1 = __importDefault(require("semver"));
/**
 * List of networks and their default port mapping.
 */


const networks = {
  mainnet: 8332,
  regtest: 18332,
  signet: 38332,
  testnet: 18332
};
/**
 * Promisify helper.
 */

const promisify = fn => (...args) => new Promise((resolve, reject) => {
  fn(...args, (error, value) => {
    if (error) {
      reject(error);
      return;
    }

    resolve(value);
  });
});
/**
 * Constructor.
 */


class Client {
  constructor({
    agentOptions,
    headers = false,
    host = 'localhost',
    logger = (0, debugnyan_1.default)('bitcoin-core'),
    network = 'mainnet',
    password,
    port,
    ssl = false,
    timeout = 30000,
    username,
    version,
    wallet
  } = {}) {
    if (!lodash_1.default.has(networks, network)) {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 0-1 arguments, but got 2.
      throw new Error(`Invalid network name "${network}"`, {
        network
      });
    }

    this.agentOptions = agentOptions;
    this.auth = (password || username) && {
      pass: password,
      user: username
    };
    this.hasNamedParametersSupport = false;
    this.headers = headers;
    this.host = host;
    this.password = password; // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message

    this.port = port || networks[network];
    this.ssl = {
      enabled: lodash_1.default.get(ssl, 'enabled', ssl),
      strict: lodash_1.default.get(ssl, 'strict', lodash_1.default.get(ssl, 'enabled', ssl))
    };
    this.timeout = timeout;
    this.wallet = wallet; // Version handling.

    if (version) {
      // Capture X.Y.Z when X.Y.Z.A is passed to support oddly formatted Bitcoin Core
      // versions such as 0.15.0.1.
      const result = /[0-9]+\.[0-9]+\.[0-9]+/.exec(version);

      if (!result) {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 0-1 arguments, but got 2.
        throw new Error(`Invalid Version "${version}"`, {
          version
        });
      }

      [version] = result;
      this.hasNamedParametersSupport = semver_1.default.satisfies(version, '>=0.14.0');
    }

    this.version = version;
    this.methods = lodash_1.default.transform(methods_1.default, (result, method, name) => {
      result[lodash_1.default.toLower(name)] = {
        features: lodash_1.default.transform(method.features, (result, constraint, name) => {
          result[name] = {
            supported: version ? semver_1.default.satisfies(version, constraint) : true
          };
        }, {}),
        supported: version ? semver_1.default.satisfies(version, method.version) : true
      };
    }, {});
    const request = (0, request_logger_1.default)(logger);
    this.request = request.defaults({
      agentOptions: this.agentOptions,
      baseUrl: `${this.ssl.enabled ? 'https' : 'http'}://${this.host}:${this.port}`,
      strictSSL: this.ssl.strict,
      timeout: this.timeout
    });
    this.request.getAsync = promisify(this.request.get);
    this.request.postAsync = promisify(this.request.post);
    this.requester = new requester_1.default({
      methods: this.methods,
      version
    });
    this.parser = new parser_1.default({
      headers: this.headers
    });
  }
  /**
   * Execute `rpc` command.
   */


  command(...args) {
    return __awaiter(this, void 0, void 0, function* () {
      let body;
      let multiwallet;
      let [input, ...parameters] = args; // eslint-disable-line prefer-const

      const isBatch = Array.isArray(input);

      if (isBatch) {
        multiwallet = lodash_1.default.some(input, command => {
          return lodash_1.default.get(this.methods[command.method], 'features.multiwallet.supported', false) === true;
        });
        body = input.map((method, index) => this.requester.prepare({
          method: method.method,
          parameters: method.parameters,
          suffix: index
        }));
      } else {
        if (this.hasNamedParametersSupport && parameters.length === 1 && lodash_1.default.isPlainObject(parameters[0])) {
          parameters = parameters[0];
        }

        multiwallet = lodash_1.default.get(this.methods[input], 'features.multiwallet.supported', false) === true;
        body = this.requester.prepare({
          method: input,
          parameters
        });
      }

      return this.parser.rpc(yield this.request.postAsync({
        auth: lodash_1.default.pickBy(this.auth, lodash_1.default.identity),
        body: JSON.stringify(body),
        uri: `${multiwallet && this.wallet ? `/wallet/${this.wallet}` : '/'}`
      }));
    });
  }
  /**
   * Given a transaction hash, returns a transaction in binary, hex-encoded binary, or JSON formats.
   */


  getTransactionByHash(hash, {
    extension = 'json'
  } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.parser.rest(extension, yield this.request.getAsync({
        encoding: extension === 'bin' ? null : undefined,
        url: `/rest/tx/${hash}.${extension}`
      }));
    });
  }
  /**
   * Given a block hash, returns a block, in binary, hex-encoded binary or JSON formats.
   * With `summary` set to `false`, the JSON response will only contain the transaction
   * hash instead of the complete transaction details. The option only affects the JSON response.
   */


  getBlockByHash(hash, {
    summary = false,
    extension = 'json'
  } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const encoding = extension === 'bin' ? null : undefined;
      const url = `/rest/block${summary ? '/notxdetails/' : '/'}${hash}.${extension}`;
      return this.parser.rest(extension, yield this.request.getAsync({
        encoding,
        url
      }));
    });
  }
  /**
   * Given a block hash, returns amount of blockheaders in upward direction.
   */


  getBlockHeadersByHash(hash, count, {
    extension = 'json'
  } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const encoding = extension === 'bin' ? null : undefined;
      const url = `/rest/headers/${count}/${hash}.${extension}`;
      return this.parser.rest(extension, yield this.request.getAsync({
        encoding,
        url
      }));
    });
  }
  /**
   * Returns various state info regarding block chain processing.
   * Only supports JSON as output format.
   */


  getBlockchainInformation() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.parser.rest('json', yield this.request.getAsync(`/rest/chaininfo.json`));
    });
  }
  /**
   * Query unspent transaction outputs for a given set of outpoints.
   * See BIP64 for input and output serialisation:
   * 	 - https://github.com/bitcoin/bips/blob/master/bip-0064.mediawiki
   */


  getUnspentTransactionOutputs(outpoints, {
    extension = 'json'
  } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const encoding = extension === 'bin' ? null : undefined;
      const sets = lodash_1.default.flatten([outpoints]).map(outpoint => {
        return `${outpoint.id}-${outpoint.index}`;
      }).join('/');
      const url = `/rest/getutxos/checkmempool/${sets}.${extension}`;
      return this.parser.rest(extension, yield this.request.getAsync({
        encoding,
        url
      }));
    });
  }
  /**
   * Returns transactions in the transaction memory pool.
   * Only supports JSON as output format.
   */


  getMemoryPoolContent() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.parser.rest('json', yield this.request.getAsync('/rest/mempool/contents.json'));
    });
  }
  /**
   * Returns various information about the transaction memory pool.
   * Only supports JSON as output format.
   *
   *   - size: the number of transactions in the transaction memory pool.
   *   - bytes: size of the transaction memory pool in bytes.
   *   - usage: total transaction memory pool memory usage.
   */


  getMemoryPoolInformation() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.parser.rest('json', yield this.request.getAsync('/rest/mempool/info.json'));
    });
  }

}
/**
 * Add all known RPC methods.
 */


lodash_1.default.forOwn(methods_1.default, (options, method) => {
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  Client.prototype[method] = lodash_1.default.partial(Client.prototype.command, method.toLowerCase());
});
/**
 * Export Client class (ESM).
 */

exports.default = Client;
/**
 * Export Client class (CJS) for compatibility with require('bitcoin-core').
 */
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message

module.exports = Client;