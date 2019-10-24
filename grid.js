let rowTotal = 16;
let gridContainer = document.getElementById('container');
let gridTotal = rowTotal * rowTotal;
let span = document.getElementsByClassName("gridSize");
let resetBtn = document.querySelector('#resetBtn');
let cell = document.getElementsByClassName("cell");
function writeGridSize(){
    for (i=0; i<span.length; i++){
        span[i].textContent=rowTotal;
    }
}
//not working yet
/* function deleteCells(){
    for(i=cell;i>0;i--){
        document.gridContainer.removeChild.cell[i];
        console.log(i);
    }
} */

function resetGrid(){
    rowTotal = prompt("New grid size?");
    deleteCells();
    drawGrid();
    writeGridSize();
}

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
drawGrid();
//resetBtn.addEventListener("click", resetGrid);