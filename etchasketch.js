let root = document.documentElement;

//make a grid with a given number

function makeDivs (number) {
  let grid = number * number;
  let gridSize = 600/number;

  for (i=0; i<grid; i++) {
    var squares = document.createElement('div');
    squares.className = "square";
    document.getElementById('divContainer').appendChild(squares);
    root.style.setProperty('--grid-height', gridSize + "px");
    root.style.setProperty('--grid-width', gridSize + "px");
  }
};

makeDivs(10); //default 10x10 grid


function getRandomColor() {
  let colors = ["SteelBlue", "Teal", "Tomato", "SlateGrey", "Turquoise",
                "Plum", "PaleVioletRed", "LightGreen", "LightSalmon",
                "LightGoldenRodYellow", "LightCoral"];
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

let square = document.getElementsByClassName("square");

function changeColor(e) {
  e.target.style.backgroundColor = getRandomColor();
}

for (i=0; i<square.length; i++) {
  square[i].addEventListener('mouseenter', changeColor)
}


//default Grid Button
function refreshPage() {
  location.reload();
}

document.getElementById("defaultGrid").addEventListener('click', refreshPage);


function newGrid() {
  let newNum = parseInt(prompt("Enter a number between 1 and 50.", "10"), 10);
  if (isNaN(newNum)) {
    alert("You must enter a number.");
    newGrid();
  }
  if (newNum <= 0 || newNum > 50) {
    alert("Number must be between 1 and 50.");
    newGrid();
  } else {
      removeDiv();
      makeDivs(newNum);
      for (i=0; i<square.length; i++) {
        square[i].addEventListener('mouseenter', changeColor)
      }
    };
}

document.getElementById("newGrid").addEventListener('click', newGrid);

//remove divs from container
function removeDiv(){
    let elements = document.getElementsByClassName("square");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
