let gameSeq = [];
let userSeq = [];


let started = false;
let level = 0;

let btns = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector("h2");
let startbutton = document.querySelector(".startBtn");

startbutton.addEventListener("click",() => {
    if(started==false){
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerHTML =  `Level ${level}`;

    let randomIndx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checAns(indx){
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level} </b> <br> Press button again to start`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor ="white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btns");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = []
    level = 0;
}


