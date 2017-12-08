/*
script.js
created 11.20.17
*/

var grid = [ 
[0, 0, 0], 
[0, 0, 0 ],
[0, 0, 0]
];

//selectors, basically which point is selected for the start up phase
var selX = 0;
var selY = 0;

function edit(x, y){
    if (grid[x][y] == 0){
        grid[x][y] = 1;
    }
    else {
        grid[x][y] = 0;
    }
}

function up(){
    if (selY > 0){
        selY = selY - 1;
    }
    else{}
}

function down(){
    if (selY < yMax){
        selY = selY + 1;
    }
    else{}
}
function left(){
    if (selX > 0){
        selX = selX - 1;
    }
    else{}
}
function right(){
    if (selX < xMax){
        selX = selX + 1;
    }
    else{}
}

function selectWithKeys(event){
    //finds current key being pressed
    try{
        var key = event.keyCode;
        if (key === 87){up()}
        if (key === 83){down()}
        if (key === 65){left()}
        if (key === 68){right()}
        if (key === 13){edit(selX, selY)}
    }catch(err){}
}

var selectKeyLoop = setInterval(selectWithKeys, 10);

var swap = true;
var dataLoop = null;
function showData_(){
    var dataString = `Grid Data: ${JSON.stringify(grid)}`;
    document.getElementById("p0").innerHTML = dataString;
}
function showData(){
    if (swap == true){
        dataLoop = setInterval(showData_, 10);
        swap = false;
    }
    else{
        clearInterval(dataLoop);
        document.getElementById("p0").innerHTML = "";
        swap = true;
    }
}

//Function "frame" was moved to page.html due to error of context loading in as null
//solution was to declare the function after the canvas had been created