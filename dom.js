const search = (document, tag) => {
  const elements = [...document.children];
  return elements.reduce(
    (acc, node) => [...acc, ...search(node, tag)],
    elements.filter(node => node.tagName.toLowerCase() === tag),
  );
};


export default search;
