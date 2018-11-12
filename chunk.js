// const chunk = (list, size) => {
//   if (list.length === 0) {
//     return [];
//   }
//   if (list.length <= size) {
//     return [list];
//   }
//   let result = [];
//   const chunked = list.reduce((acc, item) => {
//     if (acc.length === size) {
//       result = [...result, acc];
//       return acc = [item];
//     } else return acc.concat(item);
//   }, []);
//   return result.concat([chunked]);
// };

const chunk = (list, size) => {
  const iter = (coll, acc = []) => {
    if (coll.length === 0) {
      return acc;
    }
    return iter(coll.slice(size), [...acc, coll.slice(0, size)]);
  };
  return iter(list);
};

console.log(chunk([1, 2, 3, 4, 5], 3));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));
console.log(chunk([1], 2));
console.log(chunk([], 2));
console.log(chunk([1, 2, 3, 4, 5], 7));
