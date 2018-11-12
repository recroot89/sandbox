import balance from '../balance';

test('should work Balance', () => {
  expect(balance([0, 0, 0, 9])).toEqual([2, 2, 2, 3]);
  expect(balance([0, 1, 3, 5, 6])).toEqual([3, 3, 3, 3, 3]);
  expect(balance([0, 0, 0, 1, 3])).toEqual([0, 1, 1, 1, 1]);
  expect(balance([5, 0, 9, 0, 5])).toEqual([3, 4, 4, 4, 4]);
  expect(balance([0, 0, 0, 5, 5])).toEqual([2, 2, 2, 2, 2]);
  expect(balance([9, 9, 9, 4])).toEqual([7, 8, 8, 8]);
  expect(balance([0, 0, 1, 1])).toEqual([0, 0, 1, 1]);
  expect(balance([1, 1, 1, 5, 9])).toEqual([3, 3, 3, 4, 4]);
  expect(balance([1, 1, 1, 0, 0])).toEqual([0, 0, 1, 1, 1]);
});
