function summ(a, b) {
  return this.prop + a + b;
}

const a = {
  prop: 1,
  f: summ,
};

const b = {
  prop: 20,
  f: summ,
};

console.log(summ.call(a, 1, 1));
console.log(summ.call(b, 2, 2));
