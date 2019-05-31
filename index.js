function start(){
  document.getElementById('table').style.display = 'flex';
  document.getElementById('start').style.display = 'none';
}

function addRow(){
  let allRows = document.getElementById('table');
  let getRow = allRows.childNodes[1].children[0];
  let cloned = getRow.cloneNode(true);
  allRows.childNodes[1].appendChild(cloned);
}

function removeRow(btn){
  console.log('clicked removerow');

}

function addCol(){
  let allRows = document.getElementsByTagName('tr');
  let newRow = document.getElementById('cell');
  let cloned = newRow.cloneNode(true);
  for (let i = 0; i < allRows.length;i++) {
    console.log(allRows[i]);
    allRows[i].appendChild(cloned);
  }
}

function removeCol(){
  console.log('clicked removecol');
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
