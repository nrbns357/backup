 const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector(`h1`);

let DAY = "";

function getTime(){
    const date = new Date();
    const minutes = date.getUTCMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    
    clockTitle.innerText = `${ hours > 12 ? `${hours-12}` :hours}:${minutes < 10 ? `0${minutes}`:minutes
    }:${seconds < 10 ? `0${seconds}` :seconds}`;
    if(hours === 24){
        hours = 1;
        DAY = "AM";
    }else{
        hours
    }

}
 
function init(){
    getTime();
    setInterval(getTime,1000); //밀리세컨드 라서 1000을 써준다 1000 = 1초  
}

init(); 