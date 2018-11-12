import isEven from '../iseven';

test('should work isEven', () => {
  expect(isEven(9)).toBeFalsy();
  expect(isEven(1)).toBeFalsy();
  expect(isEven(-5)).toBeFalsy();
  expect(isEven(82)).toBeTruthy();
  expect(isEven(0)).toBeTruthy();
  expect(isEven(-2)).toBeTruthy();
  expect(isEven('ww')).toBeFalsy();
});
