import 'babel-polyfill'; // eslint-disable-line

// BEGIN (write your solution here)
export default class Seq {
  constructor(start, setInterval, size = Infinity) {
    this.current = start;
    this.next = setInterval;
    this.size = size;
    this[Symbol.iterator] = function* () {
      let count = 0;
      while (count < this.size) {
        yield this.current;
        this.current = this.next(this.current);
        count++;
      }
    }
  }

  skip(n) {
    let skipped = this.current;
    const next = this.next;
    while (n > 0) {
      skipped = next(skipped);
      n--;
    }
    return new Seq(skipped, this.next, this.size);
  }

  take(m) {
    return new Seq(this.current, this.next, m);
  }
}
// END


// BEGIN (write your solution here)
export default function (generator) {
  const coroutine = generator();
  const next = (result) => {
    if (result.done) {
      return result.value;
    }
    return result.value.then(
      res => next(coroutine.next(res)),
      err => next(coroutine.throw(err))
    );
  };
  return next(coroutine.next());
}
// EN)D
