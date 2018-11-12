const fs = require('fs');
const path = require('path');

const readBook = () =>
  fs.readFile(path.resolve(__dirname, 'phonebook.txt'), (err, data) => {
    if (err) {
      throw err;
    }
    const users = data
      .toString()
      .trim()
      .split('\n')
      .reduce((acc, line) => {
        const [id, name, phone] = line.split('|').map(arg => arg.trim());
        return { ...acc, [id]: { name, phone } };
      }, {});
    console.log(Object.keys(users).filter(x => 1 < Number(x) && Number(x) < 5));
  });

readBook();

// const findSolution = (target) => {
//   const find = (start, history) => {
//     if (start === target) {
//       return history;
//     } else if (start > target) {
//       return null;
//     }
//     return find(start + 5, `(${history} + 5)`) ||
//            find(start * 3, `(${history} * 3)`);
//   };
//   return find(1, '1');
// };

// // console.log(findSolution(9));

// const countLetter = (str, letter) => str.split('').filter(arg => arg === letter).length;

// console.log(countLetter('BsdsdBBdsdsBBDsbdbDSB', 's'));


// var a = 100;
// function z() {
//   var a = 150;
//   console.log(a);
// };
// z();
// console.log(a);

// let b = 200;
// for (let i = 0; i < 10; i++) {
//   let b = 250;
//   // console.log(b);
// }
// console.log(b);
