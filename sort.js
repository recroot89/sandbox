const arr1 = [['apache', 0], ['consul', 9480], ['nginx', 800]];
const arr2 = [['nginx', 800], ['apache', 0], ['consul', 9480]];

console.log(arr1.sort(([, a], [, b]) => a - b).reverse());
console.log(arr2.sort(([, a], [, b]) => a - b).reverse());

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 },
];

console.log(items.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a должно быть равным b
  return 0;
}));
