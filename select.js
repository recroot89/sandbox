import { isEmpty, tail, head, l, reduce, toString as listToString } from './listAsString';

const select = (query, dom) => {
  const iter = (queryList, domTree, acc) => {
    if (isEmpty(domTree)) {
      return acc;
    }
    const currentNode = head(domTree);
    const currentTag = head(queryList);
    const restNodes = tail(domTree);
    const restTags = tail(queryList);
    const matchFound = is(currentTag, currentNode);

    let newAcc = acc;

    if (isEmpty(restTags)) {
      if (matchFound && hasChildren(currentNode)) {
        newAcc = concat(concat(acc, l(currentNode)), select(queryList, children(currentNode)));
      } else if (matchFound) {
        newAcc = concat(acc, l(currentNode));
      } else if (!matchFound && hasChildren(currentNode)) {
        newAcc = concat(acc, select(queryList, children(currentNode)));
      }
    } else if (!isEmpty(restTags)) {
      if (matchFound && hasChildren(currentNode)) {
        newAcc = concat(acc, select(restTags, children(currentNode)));
      }
    }

    return iter(queryList, restNodes, newAcc);
  };

  return iter(query, dom, l());
};

export default select;
