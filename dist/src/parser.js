"use strict";
/**
 * Module dependencies.
 */

var __importDefault =
  (void 0 && (void 0).__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };

Object.defineProperty(exports, "__esModule", {
  value: true,
});

const json_bigint_1 = __importDefault(require("json-bigint"));

const rpc_error_1 = __importDefault(require("./errors/rpc-error"));

const lodash_1 = __importDefault(require("lodash"));
/**
 * JSONBigInt parser.
 */

const { parse } = (0, json_bigint_1.default)({
  storeAsString: true,
  strict: true,
}); // eslint-disable-line new-cap

/**
 * Get RPC response body result.
 */

function getRpcResult(body, { headers = false, response } = {}) {
  if (body.error !== null) {
    throw new rpc_error_1.default(
      lodash_1.default.get(body, "error.code", -32603),
      lodash_1.default.get(
        body,
        "error.message",
        "An error occurred while processing the RPC call to bitcoind"
      )
    );
  } // Defensive measure. This should not happen on a RPC call.

  if (!lodash_1.default.has(body, "result")) {
    throw new rpc_error_1.default(
      -32700,
      "Missing `result` on the RPC call result"
    );
  }

  if (headers) {
    return [body.result, response.headers];
  }

  return body.result;
}
/**
 * Export Parser class.
 */

class Parser {
  constructor({ headers } = {}) {
    this.headers = headers;
  }
  /**
   * Parse rpc response.
   */

  rpc(response) {
    // The RPC api returns a `text/html; charset=ISO-8859-1` encoded response with an empty string as the body
    // when an error occurs.
    if (
      typeof response.body === "string" &&
      response.headers["content-type"] !== "application/json" &&
      response.statusCode !== 200
    ) {
      throw new rpc_error_1.default(
        response.statusCode,
        response.statusMessage,
        {
          body: response.body,
        }
      );
    } // Parsing the body with custom parser to support BigNumbers.

    const body = parse(response.body);

    if (!Array.isArray(body)) {
      return getRpcResult(body, {
        headers: this.headers,
        response,
      });
    } // Batch response parsing where each response may or may not be successful.

    const batch = body.map((response) => {
      try {
        return getRpcResult(response, {
          headers: false,
          response,
        });
      } catch (e) {
        return e;
      }
    });

    if (this.headers) {
      return [batch, response.headers];
    }

    return batch;
  }

  rest(extension, response) {
    // The REST api returns a `text/plain` encoded response with the error line and the control
    // characters \r\n. For readability and debuggability, the error message is set to this content.
    // When requesting a binary response, the body will be returned as a Buffer representation of
    // this error string.
    if (
      response.headers["content-type"] !== "application/json" &&
      response.statusCode !== 200
    ) {
      if (response.body instanceof Buffer) {
        response.body = response.body.toString("utf-8");
      }

      throw new rpc_error_1.default(
        response.statusCode,
        response.body.replace("\r\n", ""),
        {
          body: response.body,
        }
      );
    } // Parsing the body with custom parser to support BigNumbers.

    if (extension === "json") {
      response.body = parse(response.body);
    }

    if (this.headers) {
      return [response.body, response.headers];
    }

    return response.body;
  }
}

exports.default = Parser;
