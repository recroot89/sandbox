const a = ['hello, world', 'text', '', 'ehu', '', 'aha'];
// const b = ['hello, world', 'ext', 'haha', '', 'text'];
const b = ['', 'text', 'asas', 'ololo'];

const compare = (data1, data2) => {
  const [less, more, directOrder] =
    data1.length < data2.length ? [data1, data2, false] : [data2, data1, true];
  return more.reduce((acc, line, index) => {
    if (index >= less.length) {
      return [...acc, directOrder ? [line, null] : [null, line]];
    }
    if (line !== less[index]) {
      return [...acc, directOrder ? [line, less[index]] : [less[index], line]];
    }
    return acc;
  }, []);
};

console.log(compare(a, b));
