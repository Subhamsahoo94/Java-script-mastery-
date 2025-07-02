let userseq = [];
let gameseq = [];


let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let level = 0;

let gamestart = false;
let btns = ["yellow","blue","red","green"];


document.addEventListener("keypress",function(){
  
    if(gamestart==false){
          gamestart = true;
          levelup();
    };
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
    
}




function levelup(){
 userseq = [];   
 level ++;
 h3.innerText = `level:${level}`;
 let randindx =Math.floor(Math.random()*4);
 let randcolor = btns[randindx];
gameseq.push(randcolor);
console.log(gameseq);
 let randbtn = document.querySelector(`.${randcolor}`);
 btnflash(randbtn);;
}

function checkans(ind){

    if(gameseq[ind]==userseq[ind]){
        if(userseq.length==gameseq.length){
            
            setTimeout(levelup,1000);

        }
    }else{
        console.log("game over");
 h3.innerText = `level:${level} game is over! \n press any key to restart`;
    reset();

    }
};

function btnpress(){
    console.log(this);
    let btn = this;
    btnflash(btn);
    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);
    
};

let button = document.querySelectorAll(".btn");

for(allbtn of button){
   allbtn.addEventListener("click",btnpress);
};

function reset(){

    gamestart = false;
    gameseq = [];
    userseq = [];
    level = 0;
}