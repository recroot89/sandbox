const path = require('path');

// const normalization = str =>
//   (`/${str.split('/').filter(arg => arg.length > 0).join('/')}`);

const getPathParts = dirPath =>
  (dirPath.split(path.sep).filter(arg => arg !== ''));
// (path.normalize(dirPath).split('/').filter(arg => arg.length > 0));

console.log(getPathParts('///etc/config//my///'));
console.log(getPathParts('/var//log//////'));
console.log(path.parse('///etc/config//my///'));
