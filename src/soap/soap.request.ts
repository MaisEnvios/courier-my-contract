import { Injectable } from '@nestjs/common';
import axios from 'axios-https-proxy-fix';

/**
 * @author Caleb Lemoine
 * @param {object} opts easy-soap-request options
 * @param {string} opts.url endpoint URL
 * @param {object} opts.headers  HTTP headers, can be string or object
 * @param {string} opts.xml SOAP envelope, can be read from file or passed as string
 * @param {int} opts.timeout Milliseconds before timing out request
 * @param {object} opts.proxy Object with proxy configuration
 * @promise response
 * @reject {error}
 * @fulfill {body,statusCode}
 * @returns {Promise.response{body,statusCode}}
 */


@Injectable()
export class SoapRequest {
  constructor() {}

  async call(opts = {
    url: '',
    headers: {},
    xml: '',
    timeout: 10000,
    proxy: false,
  }) {
    const { url, headers, xml, timeout } = opts;
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        headers,
        data: xml,
        timeout,
      }).then((response) => {
        resolve({
          response: {
            headers: response.headers,
            body: response.data,
            statusCode: response.status,
          },
        });
      }).catch((error) => {
        if (error.response) {
          console.error(`SOAP FAIL: ${error}`);
          reject(error.response.data);
        } else {
          console.error(`SOAP FAIL: ${error}`);
          reject(error);
        }
      });
    });
  }
}
