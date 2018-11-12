const event = [];

let currentHomeScore = 0;
let currentAwayScore = 0;

// Events' populating
for (let i = 0; i < 5400; i += ~~(Math.random() * 5) + 1) {
  const shouldAddScore = ~~(Math.random() * 300) % 230 === 0;

  if (shouldAddScore) {
    if (currentHomeScore > currentAwayScore) {
      currentAwayScore++;
    } else {
      currentHomeScore++;
    }
  }

  if (~~(Math.random() * 10) % 2 === 0) {
    event.push({
      offset: i,
      score: [currentHomeScore, currentAwayScore],
    });
  } else {
    event.unshift({
      offset: i,
      score: [currentHomeScore, currentAwayScore],
    });
  }
}

// Implement this according to the task
const getScore = (offset) => {
  const { score } = event.find(e => e.offset === offset) || { score: null };
  return score !== null ? { home: score[0], away: score[1] } : 'offset not found';
};

console.log(getScore(52343));
console.log(getScore(43));
console.log(getScore(223));
console.log(getScore(4));
