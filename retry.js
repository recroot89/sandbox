const noop = () => {};

export default (tries, func, callback = noop) => {
  const attempt = (count, err) => {
    if (count === 0) {
      callback(err);
      return;
    }
    const cb = (cbErr, body) => (cbErr
      ? attempt(count - 1, cbErr)
      : callback(null, body));
    func(cb);
  };
  attempt(tries);
};
