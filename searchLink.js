import url from 'url';
import http from 'http';

const getTitle = body => body.match(/<h1>(.*?)<\/h1>/)[1];
const getLinks = body =>
  (body.match(/href="\/(.*?)">/g) || [])
    .map(item => item.match(/href="\/(.*?)">/)[1]);

// BEGIN (write your solution here)
export default (titleToFind, startAddress, callback) => {
  const searchTitle = (title, address, visited, previousLinks) => {
    http.get(address, (res) => {
      const body = [];
      res.on('data', (chunk) => {
        body.push(chunk.toString());
      }).on('end', () => {
        visited.add(address);
        const html = body.join();
        const currentLinks = getLinks(html)
          .map(arg => url.format({ ...url.parse(address), pathname: arg }))
          .concat(previousLinks)
          .filter(arg => !visited.has(arg));
        if (getTitle(html) === title) {
          callback(null, address);
          return;
        } else if (currentLinks.length === 0) {
          callback(new Error('Page not found'));
          return;
        }
        const [netxLink, ...restLinks] = currentLinks;
        searchTitle(title, netxLink, visited, restLinks);
      });
    });
  };
  return searchTitle(titleToFind, startAddress, new Set(), []);
};
// END
