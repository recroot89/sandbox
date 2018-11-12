const secret = (str, percent = 70) => {
  const visibleSize = Math.round(((str.length * (100 - percent)) / 100) / 2);
  const paddingSize = str.length - (2 * visibleSize);
  const addressStart = str.substr(0, visibleSize);
  const addressEnd = str.substr(-1 * visibleSize, visibleSize);
  const padding = '*'.repeat(paddingSize);

  return `${addressStart}${padding}${addressEnd}`;
};

console.log(secret('5awH%puT=^!fvgD_6KfRGrKm-xzzUyQ6ZVt')); // 35 symbols
console.log(secret('-%8pbff+&B%+tZ6f3y?4M&hTCam&JY')); // 30 symbols
console.log(secret('H7sxFUEu$fLZMrC5G2!9HH')); // 22 symbols
console.log(secret('4Q^E7nTc-VE!?77fh7Qeq@YDF!^X@3JtSJhSgMfC')); // 40 symbols
console.log(secret('2&pYdQb-?h^Ke#b')); // 15 symbols


console.log(secret('5awH%puT=^!fvgD_6KfRGrKm-xzzUyQ6ZVt').length === 35); // 35 symbols
console.log(secret('-%8pbff+&B%+tZ6f3y?4M&hTCam&JY').length === 30); // 30 symbols
console.log(secret('H7sxFUEu$fLZMrC5G2!9HH').length === 22); // 22 symbols
console.log(secret('4Q^E7nTc-VE!?77fh7Qeq@YDF!^X@3JtSJhSgMfC').length === 40); // 40 symbols
console.log(secret('2&pYdQb-?h^Ke#b').length === 15); // 15 symbols
