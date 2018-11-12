const unsorted = [7, 2, 5, 10, 1];

const bubbleSort = (origin) => {
  const array = origin.slice();
  const count = array.length - 1;
  for (let i = 0; i < count; i += 1) {
    for (let j = 0; j < count - i; j += 1) {
      if (array[j] > array[j + 1]) {
        const max = array[j];
        array[j] = array[j + 1];
        array[j + 1] = max;
      }
    }
  }
  return array;
};

console.log(bubbleSort(unsorted));
console.log(unsorted);
