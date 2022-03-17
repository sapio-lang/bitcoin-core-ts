/**
 * Module dependencies.
 */

import JSONBigInt from "json-bigint";
import RpcError from "./errors/rpc-error";
import _ from "lodash";

/**
 * JSONBigInt parser.
 */

const { parse } = JSONBigInt({ storeAsString: true, strict: true }); // eslint-disable-line new-cap

/**
 * Get RPC response body result.
 */

function getRpcResult(body: any, { headers = false, response }: any = {}) {
  if (body.error !== null) {
    throw new RpcError(
      _.get(body, "error.code", -32603),
      _.get(
        body,
        "error.message",
        "An error occurred while processing the RPC call to bitcoind"
      )
    );
  }

  // Defensive measure. This should not happen on a RPC call.
  if (!_.has(body, "result")) {
    throw new RpcError(-32700, "Missing `result` on the RPC call result");
  }

  if (headers) {
    return [body.result, response.headers];
  }

  return body.result;
}

/**
 * Export Parser class.
 */

export default class Parser {
  headers: any;
  constructor({ headers }: any = {}) {
    this.headers = headers;
  }

  /**
   * Parse rpc response.
   */

  rpc(response: any) {
    // The RPC api returns a `text/html; charset=ISO-8859-1` encoded response with an empty string as the body
    // when an error occurs.
    if (
      typeof response.body === "string" &&
      response.headers["content-type"] !== "application/json" &&
      response.statusCode !== 200
    ) {
      throw new RpcError(response.statusCode, response.statusMessage, {
        body: response.body,
      });
    }

    // Parsing the body with custom parser to support BigNumbers.
    const body = parse(response.body);

    if (!Array.isArray(body)) {
      return getRpcResult(body, { headers: this.headers, response });
    }

    // Batch response parsing where each response may or may not be successful.
    const batch = body.map((response) => {
      try {
        return getRpcResult(response, { headers: false, response });
      } catch (e) {
        return e;
      }
    });

    if (this.headers) {
      return [batch, response.headers];
    }

    return batch;
  }

  rest(extension: any, response: any) {
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

      throw new RpcError(
        response.statusCode,
        response.body.replace("\r\n", ""),
        { body: response.body }
      );
    }

    // Parsing the body with custom parser to support BigNumbers.
    if (extension === "json") {
      response.body = parse(response.body);
    }

    if (this.headers) {
      return [response.body, response.headers];
    }

    return response.body;
  }
}
