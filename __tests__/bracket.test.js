import isBracketStructureBalanced from '../bracket';

test('should be balanced', () => {
  const str = '()';
  expect(isBracketStructureBalanced(str)).toBe(true);

  const str2 = '[()]';
  expect(isBracketStructureBalanced(str2)).toBe(true);

  const str3 = '({}[])';
  expect(isBracketStructureBalanced(str3)).toBe(true);

  const str4 = '(<><<{[()]}>>)';
  expect(isBracketStructureBalanced(str4)).toBe(true);

  const str5 = '';
  expect(isBracketStructureBalanced(str5)).toBe(true);
});

test('should not be balanced', () => {
  const str1 = '((';
  expect(isBracketStructureBalanced(str1)).toBe(false);

  const str2 = '[[()]';
  expect(isBracketStructureBalanced(str2)).toBe(false);

  const str3 = '({}}[])';
  expect(isBracketStructureBalanced(str3)).toBe(false);

  const str4 = '(<><<{[()]}>>>)';
  expect(isBracketStructureBalanced(str4)).toBe(false);

  const str5 = '}';
  expect(isBracketStructureBalanced(str5)).toBe(false);
});
