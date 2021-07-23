const body = document.querySelector("body");

const IMG_Number = 2;

function handleImgLoad(){
    console.log("finished loading");
}


function paintImage(imgNumber){
    const image = new Image();
    image.classList.add("bgImage");
    image.src = `images/${imgNumber + 1}.jpg`;
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_Number);
    return number;
}

function init(){
    const randNumber = genRandom();
    paintImage(randNumber);
}

init();