const guessScore = (scoreA, scoreB, predictA, predictB) => {
  if (scoreA === predictA && scoreB === predictB) {
    return 1;
  } else if ((scoreA - scoreB < 0 && predictA - predictB <= 0) ||
    (scoreA - scoreB >= 0 && predictA - predictB > 0)) {
    return 0;
  }
  return -1;
};

console.log(guessScore(1, 1, 1, 1) === 1);
console.log(guessScore(1, 4, 1, 4) === 1);
console.log(guessScore(5, 4, 5, 4) === 1);
console.log(guessScore(4, 0, 2, 0) === 0);
console.log(guessScore(1, 3, 0, 1) === 0);
console.log(guessScore(2, 3, 2, 5) === 0);
console.log(guessScore(2, 1, 1, 0) === 0);
console.log(guessScore(1, 2, 3, 1) === -1);
console.log(guessScore(4, 1, 0, 0) === -1);
console.log(guessScore(3, 1, 1, 1) === -1);
