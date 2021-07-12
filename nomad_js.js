function sayHello(name,age) {
return (`Hello ${name} you are ${age}years old`);

}

const greetghh= sayHello("gusgh",17);

const claculator = {
    plus : function (a,b){
        return a+b;
    },
    minus : function(a,b){
        return a+b;
    }      ,
    Multiplication : function(a,b)
    {
        return a+b;
    }
}
let a=5,b=5;

const plus = claculator.plus(a,b);
const minus = claculator.minus(a,b);
const Multiplication = claculator.Multiplication(a,b);
console.log(plus);
console.log(minus);
console.log(Multiplication);

const title = document.querySelector("#title");
title.innerHTML = "안녕 현호야 화면을 클릭해봐.";
title.style.color = "red";
document.body.style.backgroundColor="gray";
document.title = "I own you now";

document.addEventListener("click",() => {
    title.innerHTML = "현호"
})
function() {}
() => {}