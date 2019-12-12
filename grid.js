let rowTotal = 16;
const gridContainer = document.getElementById('container');
let gridTotal = rowTotal * rowTotal;
let span = document.getElementsByClassName("gridSize");
let resetBtn = document.querySelector('#resetBtn');
let cell = document.getElementsByClassName("cell");
//sets display for size of grid to row total
function writeGridSize(){
    for (i=0; i<span.length; i++){
        span[i].textContent=rowTotal;
    }
}
//deletes cells withi grid container
function deleteCells(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
        console.log("removed cell");
    }
}
//draws new grid
function drawGrid(){
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateRows = `repeat(rowTotal, 10px)`;
    gridContainer.style.gridTemplateColumns = `repeat(rowTotal, 10px)`;
    let row = 1;
    let column = 1;
        for (let i=1; i <= gridTotal; i++){
            cell = document.createElement('div');
            cell.style.border = '1px solid black';
            cell.className= "cell";
            cell.style.gridRow = row;
            cell.style.gridColumn = column;
            cell.textContent = " ";
            column += 1;
                if (column == rowTotal +1){
                    row += 1;
                    column = 1;
                }
            gridContainer.appendChild(cell);
        }
    writeGridSize();
}
function resetGrid(){
    rowTotal = prompt("New grid size?");
    deleteCells();
    drawGrid();
    writeGridSize();
}
drawGrid();
//gives me console.log for mouseover
cell.addEventListener("click", console.log("Mouse Entered cell"));
//resets grid on btn click
resetBtn.addEventListener("click", resetGrid);