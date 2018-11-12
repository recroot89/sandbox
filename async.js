const noop = (...args) => {};

const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};

const each = (coll, iteratee, callback = noop) => {
  const oncedCallback = once(callback);
  if (coll.length === 0) {
    callback(null);
    return;
  }
  let completed = 0;
  const cb = (err) => {
    if (err) {
      oncedCallback(err);
      return;
    }
    completed++;
    if (completed === coll.length) {
      oncedCallback(null);
    }
  };
  coll.forEach(item => iteratee(item, cb));
};

const asyncConcat = (coll, func, callback = noop) => {
  let result = [];
  each(coll, (arg, cb) => {
    func(arg, (err, current) => {
      result = result.concat(current);
      cb(err);
    });
  }, (err) => {
    callback(err, result);
  });
};

const asyncFilter = (coll, f, callback = noop) => {
  const result = [];
  each(coll, (item, cb) => {
    f(item, (err, current) => {
      if (current) {
        result[coll.indexOf(item)] = item;
      }
      cb(err);
    });
  }, (err) => {
    callback(err, result.filter(el => !!el));
  });
};

const detect = (coll, fn, callback = noop) => {
  const result = [];
  let count = 1;
  each(coll, (item, cb) => {
    fn(item, (err, current) => {
      count++;
      if (current) {
        result[coll.indexOf(item)] = item;
      } else if (err && count === coll.length) {
        cb(err);
      }
      cb(null);
    });
  }, (err) => {
    callback(err, result.filter(el => !!el)[0]);
  });
};

const sortBy = (coll, fn, callback = noop) => {
  const result = [];
  each(coll, (item, cb) => {
    fn(item, (err, expression) => {
      result[coll.indexOf(item)] = [item, expression];
      cb(err);
    });
  }, (err) => {
    callback(err, result.sort(([, a], [, b]) => a - b).map(([a]) => a));
  });
};
