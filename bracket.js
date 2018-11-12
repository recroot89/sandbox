const isEmptyStack = stack => stack.length === 0;

const isBracketStructureBalanced = (structure) => {
  const stack = [];
  const bracketTypePairs = ['()', '[]', '{}', '<>'];
  const closeBracketTypes = [')', ']', '}', '>'];
  const chars = structure.split('');

  for (const char of chars) {
    if (closeBracketTypes.includes(char)) {
      const prevChar = stack.pop();
      const currentPair = `${prevChar}${char}`;
      if (!bracketTypePairs.includes(currentPair)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return isEmptyStack(stack);
};

export default isBracketStructureBalanced;
