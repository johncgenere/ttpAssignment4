function start(){
  document.getElementById('table').style.display = 'flex';
  // document.getElementsByClassName('myButton')[0].style.display = 'none';
  document.getElementById('start').style.display = 'none';
}

function addRow(){

}

function removeRow(){

}

function addCol(){

}

function removeCol(){

}

function getColor(){
  var selectedColor = document.getElementById("colors").selectedIndex;
  var allOptions = document.getElementById("colors").options;
  return allOptions[selectedColor].text;
  // document.getElementById('cell').style.backgroundColor = "black";
}

function setAll(){
  var allCells = document.getElementsByTagName('td');
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = getColor();
  }
}

function resetAll(){
  var allCells = document.getElementsByTagName('td');
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = "white";
  }
}
