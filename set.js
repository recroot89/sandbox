const difference = (set1, set2) =>
  // Array.from(set1).reduce((acc, item) => (set2.has(item) ? acc : acc.add(item)), new Set());
  new Set(Array.from(set1).filter(item => !set2.has(item)));
// tests
const a = new Set([1, 2, 5, 7, 8, 9]);
const b = new Set([2, 3, 4, 7, 9]);
console.log(difference(a, b));
