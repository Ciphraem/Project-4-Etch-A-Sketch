const sketchpad = document.querySelector("#sketchpad");

function generateGrid(newSize){
    for (let horGrid = 0; horGrid < newSize*newSize; horGrid++) {
        const box = document.createElement("div");
        const boxSize = 100/newSize;
        box.style.width = boxSize;
        box.setAttribute("style",`width: ${boxSize}%`);
        sketchpad.appendChild(box);
    }
};

function removeGrid(){
    while(sketchpad.firstChild){
        sketchpad.removeChild(sketchpad.firstChild);
    }
};

//couldn't get it function that when I on mouse down across multiple divs, they would color
function mouseHover(){
    let grid = document.querySelectorAll("#sketchpad div");
    console.log(grid);
    grid.forEach(box=>{
        box.addEventListener('mouseover',()=>{
            box.setAttribute("class","mouseover");
        });
        /*box.addEventListener('mouseout',()=>{
            box.setAttribute("class","mouseout");
        });*/
    });
};

const gridSize = document.querySelector("#gridSize");
gridSize.addEventListener('click',()=>{
    let newSize = prompt(`Please enter the number of squares per side:`,'16');
    while(newSize>100 || newSize<1){
        newSize = prompt('It has to be between 1 to 100:','');
    }
    removeGrid();
    generateGrid(newSize);
    mouseHover();
});

generateGrid(16);
mouseHover();