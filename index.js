const _ = require('lodash');

const id = 1234;

const f = (value) => {
  const padding = str => (str.length === 9 - String(value).length
    ? str + String(value)
    : padding(`${str}0`));
  return _.chunk(padding('')
    .split('')
    .reverse(), 3)
    .map(element => element.join(''))
    .join('/');
};

console.log(f(id));
console.log(f(0));
console.log(f(19));
console.log(f(555));
