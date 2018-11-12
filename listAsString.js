const substr = (str, index = 0, length = str.length) => str.substr(index, length);

const length = str => str.length;

const indexOf = (str, s) => str.indexOf(s);

const delimiter = '\n';

const l = (...items) => items.join(delimiter);

// BEGIN (write your solution here)
const index = list => indexOf(list, delimiter);

const isEmpty = list => length(list) === 0;

const head = list =>
  (index(list) < 0 ? list : substr(list, 0, index(list)));

const tail = list =>
  (index(list) < 0 ? '' : substr(list, index(list) + 1));

const cons = (item, list) => `${item}${delimiter}${list}`;

const reverse = (list) => {
  const iter = (item, acc) => (isEmpty(item)
    ? acc
    : iter(tail(item), cons(head(item), acc)));
  return iter(list, l());
};

const reduce = (callback, init, list) => {
  const iter = (element, acc) => (isEmpty(element)
    ? acc
    : iter(tail(element), callback(head(element), acc)));
  return iter(list, init);
};

const toString = list =>
  `(${reduce((item, acc) => (acc ? `${acc}, ${item}` : item), '', list)})`;

const map = (callback, list) => {
  const iter = (element, acc) => (isEmpty(element)
    ? acc
    : iter(tail(element), cons(callback(head(element)), acc)));
  return reverse(iter(list, l()));
};

const filter = (predicate, list) => {
  const iter = (element, acc) => {
    if (isEmpty(element)) {
      return acc;
    }
    const current = head(element);
    const next = tail(element);
    return predicate(current)
      ? iter(next, cons(current, acc))
      : iter(next, acc);
  };
  return reverse(iter(list, l()));
};
// END

const list1 = l('foo', 'bar', 'baz', 'bin');
// console.log(head(list1));
// console.log(tail(list1));
// console.log(cons('zzz', list1));
// console.log(isEmpty(list1));
console.log(toString(reverse(map(x => `${x}11`, list1))));
console.log(reduce((item, acc) => (acc ? `${acc}+${item}` : item), '', list1));
console.log(toString(filter(element => element[0] === 'b', list1)));
