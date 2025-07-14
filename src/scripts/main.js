
let theadTh = document.querySelectorAll('tr th');
let tbodyTd = document.querySelectorAll('tr td');
let tr = document.querySelectorAll('table tr');

tdFin = Math.ceil(tbodyTd.length / tr.length);

let i = 0; let a = 0; let theadData = [];

function clone(item, cellule){
  i++;
  let newTh = document.createElement(`${cellule}`);

  if (i === 2){
    theadData.push(item.textContent);
  }

  if(i === tdFin){
    newTh.textContent=theadData[a];
    item.before(newTh);
    i=0;
    a++;
  }
}

theadTh.forEach(function(item){
 clone(item,'th');
});

i=0; a=0; theadData = [];

tbodyTd.forEach(function(item){
 clone(item, 'td');  
});
