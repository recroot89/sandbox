const query = args => Object
  .keys(args)
  .sort()
  .map(key => `${key}=${args[key]}`)
  .join('$');

const result4 = {
  a: 10,
  s: 'Wow',
  d: 3.2,
  z: '89',
};

console.log(query(result4));
