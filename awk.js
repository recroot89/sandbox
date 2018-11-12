// BEGIN (write your solution here)
export default (text) => {
  let firstWord = '';
  let count = 1;
  let state = 'newLine';
  const iter = (str, acc) => {
    if (str === '') {
      return acc;
    }
    const current = str.slice(0, 1);
    const rest = str.slice(1);
    switch (state) {
      case 'newLine':
        count = 1;
        firstWord = '';
        if (current === ' ') {
          state = 'outside';
        } else if (current !== ' ' && current !== '\n') {
          state = 'inside';
          firstWord += current;
        }
        break;
      case 'inside':
        if (current === '\n') {
          state = 'newLine';
          if (count === 1 && firstWord !== '') {
            return iter(rest, [...acc, firstWord]);
          }
        }
        if (current === ' ') {
          state = 'outside';
          if (count === 1) {
            count++;
            return iter(rest, [...acc, firstWord]);
          }
          count++;
          return iter(rest, acc);
        }
        firstWord += current;
        break;
      case 'outside':
        if (current === '\n') {
          state = 'newLine';
          return iter(rest, acc);
        }
        if (current !== ' ') {
          firstWord += current;
          state = 'inside';
        }
        break;
      default:
        throw new Error(`Unexpected state '${state}'`);
    }
    return iter(rest, acc);
  };
  return iter(text, []);
};
// END
