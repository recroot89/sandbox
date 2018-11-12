import http from 'http';
import url from 'url';
import querystring from 'querystring';

const getSearch = (queryParams, params) => {
  const mergedQuery = { ...queryParams, ...params };
  const keys = Object.keys(mergedQuery);
  const newQueryParams = keys
    .filter(key => mergedQuery[key] !== null && mergedQuery[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: mergedQuery[key] }), {});

  return keys.length > 0 ? `?${querystring.stringify(newQueryParams)}` : '';
};

// BEGIN (write your solution here)
export default (reqConfig) => {
  const urlObj = url.parse(reqConfig.url, true);
  const currentMethod = reqConfig.method;
  const postData = querystring.stringify(reqConfig.data);
  const options = {
    host: urlObj.hostname,
    port: urlObj.port,
    path: `${urlObj.pathname}${getSearch(urlObj.query, reqConfig.params)}`,
    method: currentMethod,
    headers: currentMethod === 'POST' ? {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(`${postData}`),
    } : null,
  };
  // console.log(options);
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      const body = [];
      res.on('data', (chunk) => {
        body.push(chunk.toString());
      }).on('end', () => {
        const response = {
          status: res.statusCode,
          data: body.join(),
        };
        resolve(response);
      });
    });
    req.on('error', (err) => {
      reject(err);
    });
    req.end(postData);
  });
};
// END
