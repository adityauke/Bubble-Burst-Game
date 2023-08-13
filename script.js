var audio = new Audio("bubble.wav");
var gameEnd = new Audio("gameEnd.mp3");

function createBubble(){
    let bubble = "";

    for(let i = 0 ; i<=120 ; i++){
        let rn = Math.floor(Math.random()*10)
        bubble += `<div class="bubble">${rn}</div>`
    }

    let row = document.querySelector("#pbtm")
    console.log(bubble);
    row.innerHTML = bubble;
}

let timeval = 60;
function runTimer(){
    timeval = 60;
    let timer = setInterval( function() {
        if(timeval > 0){
            timeval--;
            document.querySelector('#timeval').textContent = timeval;
        }
        else{
            gameEnd.play();
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML=`<div class="after"> <h1>Game Over... Your Score is ${score}!🎯</h1>
            <button id="startButton" class="game-button" onclick="startGame()">Start Game</button></div>`;
        }
        
    },1000)
}

let hitrn;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

let score = 0;
function updateScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score
}

document.querySelector("#pbtm").addEventListener("click" , function(dets){
    let currentBubble =Number(dets.target.textContent);
    if(currentBubble === hitrn){
        audio.play();
        updateScore();
        createBubble();
        getNewHit();
    }
});


function startGame(){
    createBubble();
    runTimer();
    getNewHit();
}

// createBubble();
// runTimer();
// getNewHit();

