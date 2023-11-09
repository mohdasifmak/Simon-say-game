let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let starter = false;
let level = 0;
let h2 = document.querySelector("h2")
let body = document.querySelector("body");

document.addEventListener("keypress", function(){
    
    if(starter == false){

      body.classList.remove("body2");

      h2.innerText = "Level 1";
      starter = true;
     
      levelUp();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 350);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
   // console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 500);
        }
    }
    else{
        h2.innerHTML = `Game Over! your score is <u><b>${level}</b></u> press any key to Restart.`;
        reset();
    }
}

function btnPress(){
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id"); 
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    starter = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    body.classList.add("body2");
}
