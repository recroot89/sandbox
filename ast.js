const _ = require('lodash');

const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
const property = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

const processAttributes = attr =>
  Object.keys(attr).reduce((acc, key) => `${acc} ${key}="${attr[key]}"`, '');

const parse = (data) => {
  const [first, ...rest] = data;
  const getProperty = arg => _.find(property, ({ check }) => check(arg));
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  const temp = rest.reduce((acc, item) => {
    const { name } = getProperty(item);
    return { ...acc, [name]: item };
  }, root);
  const { children } = temp;
  return { ...temp, children: children.map(parse) };
};

const render = ({
  name, attributes, body, children,
}) =>
  (singleTagsList.has(name)
    ? `<${name}${processAttributes(attributes)}>`
    : `<${name}${processAttributes(attributes)}>${body}${children.map(render).join('')}</${name}>`);
// END

const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

console.log(render(parse(data)));
// parse:
// { name: 'html', attributes: {}, body: '', children: [
//   { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
//     { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
//   ]},
//   { name: 'body', attributes: {}, body: '', children: [
//     { name: 'br', attributes: {}, body: '', children: [] },
//   ]},
// ]}
