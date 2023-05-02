import { check } from 'k6'; //eslint-disable-line import/no-unresolved

/**
 * @description Performs a k6 check on an http response
 * @param {number} expectedCode - The expected response code
 * @param {Object} res - The k6/http response
 * @param {Object} tags - Optional tags object to attach to metrics
 */
export const checkForResponseCode = (expectedCode, res, tags = {}) => {
  let checkObj = {};
  checkObj[`is status ${expectedCode}`] = (r) => {
    return r.status === expectedCode;
  };
  check(res, checkObj, tags);
};

/**
 * @description Performs a k6 check on an http response body
 * @param {string} expectedContent - The content you expect the body to have
 * @param {Object} res - the k6/http response
 * @param {Object} tags - Optional tags object to attach to metrics
 */
export const checkResponseBodyForContent = (expectedContent, res, tags = {}) => {
  let checkObj = {};
  checkObj[`response body has ${expectedContent}`] = (r) => {
    return r.body.includes(expectedContent) === true;
  };
  check(res, checkObj, tags);
};

/**
 * @description Performs a k6 check on the title of the HTML page response
 * @param {string} expectedTitle - The title you expect
 * @param {Object} res - the k6/http response
 * @param {Object} tags - Optional tags object to attach to metrics
 */
export const checkPageTitle = (expectedTitle, res, tags = {}) => {
  let checkObj = {};
  checkObj[`page title is ${expectedTitle}`] = (r) => {
    return r.html().find('head title').text() === expectedTitle;
  };
  check(res, checkObj, tags);
};

/**
 * @description Performs a k6 check on a response header
 * @param {string} headerName - The response header you want to check
 * @param {string} headerValue - The expected header value
 * @param {Object} res - the k6/http response
 * @param {Object} tags - Optional tags object to attach to metrics
 */
export const checkResponseHeader = (headerName, headerValue, res, tags = {}) => {
  let checkObj = {};
  checkObj[`${headerName} is ${headerValue}`] = (r) => {
    return r.headers[headerName] === headerValue;
  };
  check(res, checkObj, tags);
};

/**
 * @description Performs a k6 check for the specified property in the response JSON
 * @param {string} propName - The property to verify the presence of
 * @param {Object} res - the k6/http response
 * @param {Object} opts - An object containing optional params. This can include objToCheck if you wish to check
 * something other than the root JSON response for the specified property, and/or tags to attach to metrics.
 */
export const checkForJSONProperty = (propName, res, opts = {}) => {
  if (!opts.tags)
    opts.tags = {};

  if (!opts.objToCheck)
    opts.objToCheck = res.json();

  let checkObj = {};
  checkObj[`JSON response has ${propName} property`] = (r) => {
    return r.hasOwnProperty(propName);
  };
  check(opts.objToCheck, checkObj, opts.tags);
};
