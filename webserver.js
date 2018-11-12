import http from 'http';
import url from 'url';
import querystring from 'querystring';

export default users => http.createServer((request, response) => {
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(users).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search')) {
      // BEGIN (write your solution here)
      const query = url.parse(request.url, true).query.q.toLowerCase();
      const result = Object.keys(users).reduce((acc, line) => {
        const userInfo = users[line];
        if (userInfo.name.toLowerCase().includes(query)) {
          return `${acc}${userInfo.name}, ${userInfo.phone}\n`;
        }
        return acc;
      }, '');
      response.end(result.trim());
      // END
    }
  });

  request.resume();
});
