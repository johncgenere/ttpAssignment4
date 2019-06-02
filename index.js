function start(){
  document.getElementById('table').style.display = 'flex';
  document.getElementById('start').style.display = 'none';
  document.getElementById('title').style.display = 'none';
}

function addRow(){
  let allRows = document.getElementById('table');
  let getRow = allRows.childNodes[1].children[0];
  let cloned = getRow.cloneNode(true);
  let allCells = cloned.children;
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = 'white';
  }
  allRows.childNodes[1].appendChild(cloned);
}

function removeRow(){
  let table = document.getElementById('table');
  let length = table.childNodes[1].children.length;
  if(length === 1){
    window.alert('CAN\'T REMOVE THE LAST ROW!');
  } else {
    let rmRow = table.childNodes[1].children[length-1];
    let parent = rmRow.parentElement;
    parent.removeChild(rmRow);
  }
}

const addColByIndex = (function(allRows, index){
  let getCol = document.getElementById('cell');
  let cloned = getCol.cloneNode(true);
  cloned.style.backgroundColor = 'white';

  allRows[index].appendChild(cloned);
});

function addCol(){
  let table = document.getElementById('table');
  let allRows = table.childNodes[1].children;

  for(let i = 0; i < allRows.length; i++){
    addColByIndex(allRows, i);
  }
}

const removeColByIndex = (function(table, index){
  let currCol = table.childNodes[1].children[index];
  let length = currCol.children.length
  if(length === 1){
    window.alert('CAN\'T REMOVE THE LAST COLUMN!');
  } else {
    let remove = currCol.children[length-1];
    currCol.removeChild(remove);
  }
});

function removeCol(){
  let table = document.getElementById('table');
  let allRows = table.childNodes[1].children;

  for(let i = 0; i < allRows.length; i++){
    removeColByIndex(table, i);
  }
}

function cellChange(cell){
  cell.style.backgroundColor = getColor();
}

let on = false;

function up(cell){
  cellChange(cell);
  on = false;
}

function down(cell){
  cellChange(cell);
  on = true;
}

function over(cell){
  if (on === true) {
    cellChange(cell);
  }
}

function getColor(){
  let selectedColor = document.getElementById("colors").selectedIndex;
  let allOptions = document.getElementById("colors").options;
  return allOptions[selectedColor].text;
}

function setAll(){
  let allCells = document.getElementsByTagName('td');
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = getColor();
  }
}

function resetAll(){
  let allCells = document.getElementsByTagName('td');
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = "white";
  }
}
