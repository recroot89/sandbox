const func = args => (args.reduce((acc, [first, second]) =>
  ({ ...acc, [first]: second }), {}));

console.log(func([['fred', 30], ['barney', 40]]));

const t = (array, num) => {
  if (array.length === 0) {
    return null;
  }
  return array.indexOf(array.reduce((acc, item) =>
    (Math.abs(item - num) < acc ? item : acc), array[0]));
};

console.log(t([15, 10, 3, 4], 4));

const map = (f, tree) => {
  const [, children] = tree;
  const [newName] = f(tree);
  if (!children) {
    return [newName];
  }
  return [newName, children.map(c => map(f, c))];
};

const filter = (f, tree) => {
  if (!f(tree)) {
    return null;
  }
  const [name, children] = tree;
  if (!children) {
    return tree;
  }
  return [name, children.map(x => filter(f, x)).filter(v => v)];
};

const reduce = (f, tree, acc) => {
  const [, children] = tree;
  const newAcc = f(acc, tree);
  if (!children) {
    return newAcc;
  }
  return children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
};

const tree = ['a', [
  ['B', [['e'], ['F']]],
  ['C'],
  ['d', [['G'], ['j']]],
]];

console.log(JSON.stringify(map(([name]) => [name.toLowerCase()], tree)));
console.log(JSON.stringify(filter(([name]) => name === name.toLowerCase(), tree)));
console.log(reduce(acc => acc + 1, tree, 0));
