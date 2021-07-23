const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser", // 콘솔창에서 불러올 이름을 저장해준다.
SHOWING_CN = "showing"; //변수에 클래스 이름으로 쓸 이름을 저장해준다.

function handleSubmyit(event){
    event.preventDefault(); //이벤트를 실행 하지 않는다.
    const currentValue = input.value; //currentValue에 내가 텍스트에 적은 글. 즉 value를 저장한다. (value = 텍스트 안에 글)
    paintgreeting(currentValue); // 저장한 값을 가지고 함수로 이동
}

function askForname(){
    form.classList.add(SHOWING_CN); // form태그에 클래스 리스트로 이름{SHOWING_CN}을 새로 추가(add)해서  css - display : block 기능을 넣는다.
    form.addEventListener("submit", handleSubmyit); //submit(제출) 이란 이벤트를 실행 했을때 handleSubmyit 함수로 이동
}

function paintgreeting(text){
    form.classList.remove(SHOWING_CN); // form 태그에 클래스 리스트로 이름{SHOWING_CN} 을 삭제(remove)한다 그러므로 css기능은 사라진다.
    greeting.classList.add(SHOWING_CN); // form 태그에 클래스 리스트로 이름{SHOWING_CN}을 새로 추가(add)해서  css - display : block 기능을 넣는다.
    greeting.innerText =`Hello ${text}`; // text 받은 값을 화면에 보여준다.
}
 
function loadName(){
    const currentUser = localStorage.getItem(USER_LS); // currentUser라는 변수 안에 콘솔창에서 가져온  USER_LS이란 변수 안에 null이나 다른 값을 변수 currentUser에 저장을 해준다.
    if (currentUser === null) { // 콘솔창에서 불러온 currentUser 안에 값이 null이 들었다면 askForname 함수로 이동
        askForname();
    } else { // 아니라면 paintgreeting 라는 함수로 currentUser값을 가지고 이동
        paintgreeting(currentUser);
    }
}

function init(){
        loadName();
}

init();