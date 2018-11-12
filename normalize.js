import { capitalize } from 'lodash';

// BEGIN (write your solution here)
const normalize = (document) => {
  const elements = [...document.body.getElementsByTagName('*')];
  return elements.map((node) => {
    const [firstClassName, ...rest] = node.className.split('-');
    const newClassName = [firstClassName, ...rest.map(x => capitalize(x))].join('');
    node.className = newClassName;
    return node;
  });
};

export default normalize;
// END
