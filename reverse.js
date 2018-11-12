const reverse = (str) => {
  const start = str.split('');
  const iter = (item, acc) => {
    if (item.length === 0) {
      return acc;
    }
    return iter(item.slice(0, -1), [...acc, item.slice(-1)]);
  };
  return iter(start, []).join('');
};

console.log(reverse('hello world!'));
