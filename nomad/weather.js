const COORDS = 'coords';


function saveCoords(coordsObj){
     localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const kongitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
     
}

function handleGeoError(){
    console.log("cant access geo location");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces , handleGeoError);
}

function loadCoords(){
    const loadCords = localStorage.getItem(COORDS);
    if(loadCords === null)
    {
        askForCoords();
    }
    else 
    {

    }
}

function init(){
    loadToDos();
}

init();