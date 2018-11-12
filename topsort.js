// BEGIN (write your solution here)
const sortGraph = (graph) => {
  const keys = Object.keys(graph);
  return keys.reduce((acc, item) => {
    const value = graph[item];
    if (value.length === 0) {
      return !acc.includes(item) ? acc.concat(item) : acc;
    }

    const iter = (array, init) => array.reduce((cAcc, n) => {
      if (!graph[n]) {
        return !cAcc.includes(n) ? cAcc.concat(n) : cAcc;
      }
      return !cAcc.includes(n) ? [...iter(graph[n], cAcc), n] : iter(graph[n], cAcc);
    }, init);

    return !acc.includes(item) ? [...iter(value, acc), item] : iter(value, acc);
  }, []);
};
// END

const graphSort = (deps) => {
  const add = (acc, node) => {
    const subDeps = deps[node];
    const subAcc = subDeps ? subDeps.reduce(add, []) : [];
    return { ...acc, ...subAcc, [node]: true };
  };
  const set = Object.keys(deps).reduce(add, []);
  return Object.keys(set);
};

const graph = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};

const graph2 = {
  wrong: ['predicated', 'sexp_processor'],
  xpath: ['nokogiri'],
  predicated: ['htmlentities'],
  sexp_processor: [],
  nokogiri: ['wrong'],
  virtus: [],
};

console.log(graphSort(graph));
console.log(sortGraph(graph) === graphSort(graph));
console.log(['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'] === graphSort(graph));
console.log(graphSort(graph2));
console.log(['htmlentities', 'predicated', 'sexp_processor', 'wrong', 'nokogiri', 'xpath', 'virtus'] === graphSort(graph2));
