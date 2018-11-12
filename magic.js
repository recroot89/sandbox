// function magic(...rest) {
//   function sum(...args) {
//     const init = Number.isInteger(sum.valueOf()) ? sum.valueOf() : 0;
//     sum.valueOf = () => args.reduce((acc, num) => acc + num, init);
//     return sum;
//   }
//   return sum.call(this, ...rest);
// }

function magic(...args) {
  const sum = args.reduce((acc, num) => acc + num, 0);
  const inner = (...rest) => magic(sum, ...rest);
  inner.valueOf = () => sum;
  return inner;
}

// tests:
console.log(magic() + 0); // 0
console.log(magic() + 1); // 1
magic(4, 5);
console.log(magic(5, 2, -8) + 2); // 1
console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) - 8); // 30
console.log(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) + 7); // 20
magic(1, 3, 4);
console.log(magic(5) + 1); // 6
