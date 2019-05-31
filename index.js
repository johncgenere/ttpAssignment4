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

function removeRow(){
  let table = document.getElementById('table');
  let rmRow = table.childNodes[1].children[0];
  let parent = rmRow.parentElement;
  parent.removeChild(rmRow);
}

function addCol(){
  let table = document.getElementById('table');
  let allRows = table.childNodes[1].children;
  let getCol = document.getElementById('cell');
  let cloned = getCol.cloneNode(true);

  for (var i = 0; i < allRows.length; i++) {
    console.log(allRows[i].appendChild(cloned));
  }

  // console.log(table);
  // console.log(allRows);
  // console.log(getCol);
  // console.log(cloned);
  // allRows.appendChild(cloned);
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
