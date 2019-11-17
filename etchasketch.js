let root = document.documentElement;

function makeDivs (number) {
  let grid = number * number;
  let gridSize = 700/number;

  for (i=0; i<grid; i++) {
    var squares = document.createElement('div');
    squares.className = "square";
    document.getElementById('divContainer').appendChild(squares);
    root.style.setProperty('--grid-height', gridSize + "px");
    root.style.setProperty('--grid-width', gridSize + "px");
  }
};

makeDivs(10); //default 10x10 grid
