/*
document.addEventListener("keydown", function (e) {
    console.log(e.key)
})

const box = document.querySelector("#box");

let varL = 0;
let varT = 0;

let leftP;
let topP;

document.addEventListener("keydown", (e) => {
    const bomberman = document.querySelector("#bomberman");

    switch (e.key) {
        case 'ArrowUp': varT -= 5; break;
        case 'ArrowDown': varT += 5; break;
        case 'ArrowLeft': varL -= 5; break;
        case 'ArrowRight': varL += 5; break;
        default: return;
    }

    leftP = `calc(50% - 25px + ${varL}px)`;
    topP = `calc(50% - 25px + ${varT}px)`;

    bomberman.style.left = leftP;
    bomberman.style.top = topP;
});

document.addEventListener("keyup", (e) => {
    switch (e.key.toLowerCase()) {
        case 'x': bomb(); break;
        case 'z': remove(); break;
        default: return;
    }
});

const bomb = () => {
    box.innerHTML += `<div class='bomb' style='left:${leftP}; top:${topP};'>
    <img src='../../images/bomberman/bomb.png'>
    </div>`
};

const remove = () => {
    const boom = document.querySelectorAll(".bomb");
    for (let i = 0; i < boom.length; i++) {
        boom[i].innerHTML = "<img src='../../images/bomberman/boomm.png'>"
    }
};
*/

/* 답안 */
let xPos=0;
let yPos=0;

document.addEventListener("keydown",function(e){
    const bomberman = document.querySelector("#bomberman");

    switch(e.key) {
        case 'ArrowUp' : yPos -= 10; break;
        case 'ArrowDown' : yPos += 10; break;
        case 'ArrowLeft' : xPos -= 10; break;
        case 'ArrowRight' : xPos += 10; break;
        case 'x' : bomb(); break;
        case 'z' : remove(); break;
        default : return;
    }

    bomberman.style.transform = `translate(${xPos}px, ${yPos}px)`
})

const bomb = () => {
    box.innerHTML +=
        `<img 
            src='../../images/bomberman/bomb.png' 
            class='bomb' 
            style='transform:translate(${xPos}px,${yPos}px);'
        >`
};

const remove = () => {
    const boom = document.querySelectorAll(".bomb");
    for(let i=0; i<boom.length; i++){
        boom[i].src = "../../images/bomberman/boomm.png";
    }
};