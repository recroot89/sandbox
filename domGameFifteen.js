const values = [8, 3, 2, 9, 11, 15, 5, 1, 7, 6, 13, 4, 12, 10, 14];

const generatePlayingField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 4; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 4; j += 1) {
      const cell = row.insertCell();
      cell.className = 'p-3';
      if (i === 3 && j === 3) {
        cell.classList.add('table-active');
      } else {
        cell.textContent = values[i + (j * 4)];
      }
    }
  }
  return tableEl;
};

// BEGIN (write your solution here)
export default () => {
  document.querySelector('div.gem-puzzle').appendChild(generatePlayingField());

  const handle = (event) => {
    const clicked = event.target;
    const { cellIndex } = clicked;
    const { rowIndex } = clicked.parentNode;
    const currentActive = event.currentTarget.querySelector('td.p-3.table-active');
    const currentCellIndex = currentActive.cellIndex;
    const currentRowIndex = currentActive.parentNode.rowIndex;

    if ((cellIndex === currentCellIndex && Math.abs(rowIndex - currentRowIndex) === 1) ||
        (Math.abs(cellIndex - currentCellIndex) === 1 && rowIndex === currentRowIndex)) {
      currentActive.classList.remove('table-active');
      currentActive.textContent = clicked.textContent;
      clicked.textContent = null;
      clicked.classList.add('table-active');
    }
  };

  const table = document.querySelector('table.table-bordered');
  table.addEventListener('click', handle);
};
// END
