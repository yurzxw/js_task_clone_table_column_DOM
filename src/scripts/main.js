'use strict';

const rows = [...document.querySelectorAll('tr')];
const column5 = rows.map((row) => {
  return row.children[4];
});
const column2 = rows.map((row) => {
  return row.children[1].cloneNode(true);
});

for (let i = 0; i < rows.length; i++) {
  rows[i].appendChild(column2[i]);
  rows[i].appendChild(column5[i]);
}
