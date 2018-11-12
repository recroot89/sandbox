const balance = (numArray, prevSum = 0) => {
  const current = numArray[0];
  if (numArray.length === 1) {
    return [current - prevSum];
  }
  const sum = numArray.reduce((acc, num) => acc + num, 0) - prevSum;
  const base = Math.floor(sum / numArray.length);

  return base === 0
    ? [0, ...balance(numArray.slice(1), prevSum - current)]
    : [base, ...balance(numArray.slice(1), (prevSum + base) - current)];
};

export default balance;
