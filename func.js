const numbers = [1, 2, 4, 2, 1, 5, 4, 2, 5, 3, 3];

// const findOdd = list => list.reduce((acc, item) => acc ^ item, 0);

const findOdd = (list) => {
  const temp = list.reduce((acc, element) => {
    const newValue = acc[element] ? acc[element] + 1 : 1;
    return { ...acc, [element]: newValue };
  }, {});
  return Object.keys(temp).reduce((acc, key) => (temp[key] % 2 !== 0 ? Number(key) : acc), 0);
};

console.log(findOdd(numbers));
