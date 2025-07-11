const createCloneTh = document.createElement('th');

document.querySelector('table thead tr th:nth-child(4n)').after(createCloneTh);

const getTh2Text = document.querySelector(
  'table thead tr th:nth-child(2)',
).textContent;
const clonedTh = document.querySelector('table thead tr th:nth-child(5)');

clonedTh.textContent = getTh2Text;

const createCloneThFoot = document.createElement('th');

document
  .querySelector('table tfoot tr th:nth-child(4n)')
  .after(createCloneThFoot);

const getTh2FootText = document.querySelector(
  'table tfoot tr th:nth-child(2)',
).textContent;
const clonedThFoot = document.querySelector('table tfoot tr th:nth-child(5)');

clonedThFoot.textContent = getTh2FootText;

const copieFromThisTd = document.querySelectorAll(
  'table tbody tr td:nth-child(2)',
);
const putAfrThisTd = document.querySelectorAll(
  'table tbody tr td:nth-child(4)',
);

const copiedDataArray = [];

copieFromThisTd.forEach(function (item) {
  const cloneTd = item.textContent;

  copiedDataArray.push(cloneTd);
});

putAfrThisTd.forEach(function (item1) {
  const tdCloned = document.createElement('td');

  item1.after(tdCloned);
});

const clonedTd = document.querySelectorAll('table tbody tr td:nth-child(5)');
let i = 0;

clonedTd.forEach(function (item) {
  item.textContent = copiedDataArray[i];
  i++;
});
