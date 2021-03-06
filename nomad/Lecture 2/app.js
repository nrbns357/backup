 const canvas = document.getElementById("jsCanvas"),
 ctx = canvas.getContext("2d"),
 colors = document.getElementsByClassName("jsColor"),
 range = document.getElementById("jsRnage"),
 mode = document.getElementById("jsMode");

const INITIAL_COLOR ="#2c2c2c";
const CANVAS_SIZE = "700";

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = "INITIAL_COLOR";
ctx.fillStyle = "INITIAL_COLOR";
 ctx.lineWidth = 2.5;

 
 let painting = false;
 let filling =false;

function stopPainting(){
    painting=false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y =event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y); 
        ctx.stroke();
        // ctx.closePath();
    }
}



function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;

}

function handleModeclick(){
    if(filling === true){
        filling = false;
        mode.innerText ="Fill";

    }else{
        filling=true;
        mode.innerText="Paint";
    }
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

 if(canvas){
     canvas.addEventListener("mousemove", onMouseMove);
     canvas.addEventListener("mousedown", startPainting);
     canvas.addEventListener("mouseup", stopPainting);
     canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click",handleColorClick)
);

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeclick);
}