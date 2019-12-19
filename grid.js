//function that runs on load
initial(16);
function initial(gridSize){
    drawGrid(gridSize);
    createListeners();
    const resetBtn = document.querySelector('#resetBtn');
    resetBtn.addEventListener('click',resetGrid);
    const clearBtn = document.querySelector('#clearBtn');
    clearBtn.addEventListener('click',clearGrid);
    const colorizeBtn = document.querySelector('#colorizeButton');
    colorizeBtn.addEventListener('click',colorize);
    //initial value for cellcolor
    let cellColor = '#000000';
    writeColor(cellColor);
    //initial value for brightness, can be 0-255
    let brightness = 220;
    writeBrightness(brightness);
    writeGridSize(gridSize);
}
//draws grid
function drawGrid(gridSize){
    let gridContainer = document.getElementById('container');
    //sets column layout to one fraction per grid size
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    //creates one cell per gridSize squared
    for(let i = 0; i < gridSize ** 2; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
    }
}
//creates listeners for cells (hover effect)
function createListeners(){
    let cells = getCells();
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            cell.classList.remove('clear');
            cell.classList.add("marked");
        });
    });
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            cell.classList.add('clear');
        })
    })
}
function colorize(brightness){
    cells = getCells();
    cells.forEach((cell) => {
        marked.style.backgroundColor = `${randomColor(brightness)}`;
    });
}
//function that runs on reset button to remove cells and prompt for new grid
function resetGrid(){
    cells = getCells();
    cells.forEach((cell) => {
        cell.parentNode.removeChild(cell);
    });
    initial(prompt("Grid Size?", 16));
}
//function that removes marked class from all cells
function clearGrid(){
    cells = getCells();
    cells.forEach((cell) => {
        cell.classList.remove('marked');
    });
}
//function that writes the size of the current grid in HTML display
function writeGridSize(gridSize){
    let displaySize = document.getElementsByClassName("displaySize");
    for (i = 0; i < displaySize.length; i++){
        displaySize[i].textContent = gridSize;
    }
}
//function that writes color
function writeColor(cellColor){
    let displayColor = document.getElementById("displayColor");
    displayColor.textContent = cellColor;
}
//function that writes Brightness
function writeBrightness(brightness){
    let displayBrightess = document.getElementById("displayBrightness");
    displayBrightess.textContent = brightness;
}
//function that writes opacity
//function because I'm tired of typing this out
function getCells(){
    return document.querySelectorAll(".cell");
}

//function for a random color generation
function randomColor(brightness){
    function randomChannel(brightness){
      var r = 255-brightness;
      var n = 0|((Math.random() * r) + brightness);
      var s = n.toString(16);
      return (s.length==1) ? '0'+s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
  }