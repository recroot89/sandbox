// import url from 'url';
const url = require('url');

const solution = (address, qstring) => {
  const obj = url.parse(address, true);
  const modifiedQuery = { ...obj.query, ...qstring };
  obj.query = Object.keys(modifiedQuery)
    .filter(key => modifiedQuery[key] !== null && modifiedQuery[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: modifiedQuery[key] }), {});
  obj.search = null;
  return url.format(obj);
};

// tests:
const data = 'amazon.com/search?page=10&per=5';
const newQuery = {
  order: 'desc', hidden: false, per: null,
};
console.log(solution(data, newQuery));
