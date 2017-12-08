/*
gameScript.js
created 11.21.2017
*/
function hideOrShow(elementId){
    var element = document.getElementById(elementId);
    if (element.style.display === "none"){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
}
hideOrShow("gameButtons");

//adds all nums in an array
function add(arrayName){
    for (i=0; i<arrayName.lenth; i++){
        if (arrayName[i] === undefined){
            arrayName[i] = 0
        }else{}
    }
    return arrayName.reduce(function(a, b){return a+b}, 0);
}

function testNull(x,y){
    if (grid != undefined && grid[x] != undefined && grid[x][y] != undefined){neighbours.push(grid[x][y])}else{neighbours.push(0)}
}

var neighbours = []

function countNeighbours(x, y){
    neighbours = []
    testNull(x-1, y);
    testNull(x-1, y+1);
    testNull(x-1, y-1);
    testNull(x, y+1);
    testNull(x, y-1);
    testNull(x+1, y);
    testNull(x+1, y+1);
    testNull(x+1, y-1);
    return add(neighbours);
}

function step(){
    console.log("step. ")
    var gridSave = grid.map(x => x.slice())
    for (e=0; e<grid.length; e++){
        for (f=0; f<grid[e].length; f++){
            //if the cell is alive:
            if (grid[e][f] === 1){
                var value = countNeighbours(e, f);
                //3 rules of live cells
                if (value < 2){gridSave[e][f] = 0}
                if (value === 2 || value ===3){gridSave[e][f] = 1}
                if (value > 3){gridSave[e][f] = 0}
            }
            //if the cell is dead:
            else{
                //1 rule of dead cell
                var value = countNeighbours(e, f);
                if (value === 3){gridSave[e][f] = 1}
            }
     
       }
    }
    grid = gridSave.map(x => x.slice())
}

function keep(){
    hidingStuff();
    selX = 0;
    selY = 0;
    clearInterval(autoStepLoop);
    swapA = false;
}

function revert(){
    grid = originalGrid;
    hidingStuff();
    selX = 0;
    selY = 0;
    clearInterval(autoStepLoop);
    swapA = false;
}

function hidingStuff(){
    hideOrShow("mainDiv");
    hideOrShow("gameButtons");
    hideOrShow("runButton");
}

function run(){
    selX = -2;
    selY = -2;
    originalGrid = grid.map(x => x.slice())
    hidingStuff();
}

swapA = false
var autoStepLoop = null
function autoStep(){
    if (swapA === false){
        var stepTime = document.getElementsByName("stepTime")[0].value;
        autoStepLoop = setInterval(step, stepTime);
        clearInterval(selectKeyLoop);
        swapA = true;
    }
    else{
        clearInterval(autoStepLoop);
        selectKeyLoop = setInterval(selectWithKeys, 10);
        swapA = false;
    }
}