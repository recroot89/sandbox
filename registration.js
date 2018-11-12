import url from 'url';
import http from 'http';
import querystring from 'querystring';

const getToken = body => body.match(/value="(\w+)"/)[1];

export default (registrationFormUrl, submitFormUrl, nickname, callback) => {
  // BEGIN (write your solution here)
  const options = { ...url.parse(registrationFormUrl), method: 'GET', nickname };
  const req = http.request(options, (res) => {
    console.log(`STATUS ${res.statusCode}`);
    if (res.statusCode === 200) {
      const body = [];
      res.on('data', (chunk) => {
        body.push(chunk.toString());
      }).on('end', () => {
        const token = getToken(body.join());
        const postData = querystring.stringify({ nickname, token });
        const postOptions = {
          ...url.parse(submitFormUrl),
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(`${postData}`),
          },
        };
        const reqPost = http.request(postOptions, (res) => {
          if (res.statusCode === 302) {
            callback();
            return;
          }
          callback(new Error());
        });
        reqPost.write(postData);
        reqPost.end();
      });
    } else {
      callback(new Error());
    }
  });
  req.end();
  // END
};


const html = `<html><head><title></title></head><body><form action="/users" method="post">
<input type="hidden" name="token" value="c8aa4dca200b77b448abef646aee56e2"/><fieldset>
<legend>Sign Up</legend><div><input type="text" name="nickname" placeholder="Nickname"/></div>
<div><button type="submit">Submit</button></div></fieldset></form><div><h3>Users</h3>
<ul><li>player1</li></ul></div></body></html>`;

console.log(getToken(html));

// BEGIN (write your solution here)
export default async (registrationFormUrl, submitFormUrl, nickname) => {
  const { data, status } = await get(registrationFormUrl);
  if (status === 200) {
    const token = getToken(data);
    const response = await post(submitFormUrl, { nickname, token });
    return response.status === 302 ? null : new Error();
  }
  return new Error();
};
// END
