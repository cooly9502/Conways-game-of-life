/*
drawScript.js
created 11.21.17
*/
var xMax = 0;
var yMax = 0;
function checkVal(){
    xMax = Number(document.getElementsByName("xMax")[0].value);
    yMax = Number(document.getElementsByName("yMax")[0].value);
    if (xMax == "" || yMax == ""){
        xMax = 1;
        yMax = 1;
    }

    if (grid.length != xMax || grid[0].length != yMax){
        for (i=0; i<grid.length; i++){

            if (grid.length !=xMax){
                if ((xMax - grid.length) > 0){
                    for(z=0; z < (xMax - grid.length); z++){
                        grid.push([]);

                    }
                }
                else{
                    for (z=0; z < -(xMax-grid.length); z++){
                            grid.splice(grid.length-1, 1);
                        }
                    }  
                }

            if (grid[i].length !=yMax){
                if ((yMax - grid[i].length) > 0){
                    for(z=0; z < yMax; z++){
                        grid[i].push(0);
                    }
                }
                else{
                    for (z=0; z < -(yMax-grid[i].length); z++){
                            grid[i].splice(grid[i].length-1, 1);
                        }
                    }  
                }
            }
        }
        xMax = xMax - 1;
        yMax = yMax - 1;
    }


var c = document.getElementById("myCanvas");
var canvas = document.getElementsByTagName("canvas")[0];
var ctx = c.getContext("2d");
function eachFrame(){
    //used to show selected x, y (ignore)
    document.getElementById("p1").innerHTML = `Selected X: ${selX}<br/>Selected Y: ${selY}`;

    checkVal();
    canvas.width = 10*(xMax+1);
    canvas.height = 10*(yMax+1);
    ctx.fillStyle = "blue"
    ctx.fillRect(0, 0, c.width, c.height);
    for (a=0; a<(xMax+1); a++) {
        for (b=0; b<(yMax+1); b++) {
            if (grid[a][b] == 0){
                ctx.lineWidth = .7;
                ctx.strokeStyle = "black";
                ctx.strokeRect(a*10, b*10, 10, 10);
            }
            else {
                ctx.fillStyle = "lime";
                ctx.fillRect(a*10, b*10, 10, 10);
                ctx.lineWidth = .7;
                ctx.strokeStyle = "black";
                ctx.strokeRect(a*10, b*10, 10, 10);
            }

            
        }
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(selX*10, selY*10, 10, 10);
}
setInterval(eachFrame, 10);