// Buttons
const btn = document.getElementById('btn')
const rock = document.getElementById('btn-1')
const scissor = document.getElementById('btn-2')
const paper = document.getElementById('btn-3')
const yScoreElement = document.getElementById('yScore')
const cScoreElement = document.getElementById('cScore')
let yScoreValue = 0
let cScoreValue = 0

const message = document.getElementById('message')

const choice = ['stone', 'scissors', 'paper'];
// Rule of Game :  A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.

// Generating computer choice
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// var computerResponse = getRandomInt(1, 3);

const rockClick = () => {
    const cResponse = getRandomInt(0,2);
    if(cResponse == 0){
        message.innerHTML = `Your's ==> <img src="./images/stone.png" alt="Rock" style="width:30px"/> "YOU TIRED"  <img src="./images/${choice[cResponse]}.png" alt="Rock" style="width:30px"/> <== Computer's`;
    }
    else if(cResponse == 1){
        message.innerHTML = `Your's ==> <img src="./images/stone.png" alt="Rock" style="width:30px"/> "YOU WIN"  <img src="./images/${choice[cResponse]}.png" alt="Rock" style="width:30px"/> <== Computer's`;
        yScoreValue++;
        yScoreElement.innerHTML = yScoreValue;
    }
    else{
        message.innerHTML = `Your's ==> <img src="./images/stone.png" alt="Rock" style="width:30px"/> "YOU LOSE"   <img src="./images/${choice[cResponse]}.png" alt="Rock" style="width:30px"/> <== Computer's`;
        cScoreValue++;
        cScoreElement.innerHTML = cScoreValue;
        
    }
}
const scissorClick = () => {
    const cResponse = getRandomInt(0,2);
    if(cResponse == 1){
        message.innerHTML = `Your's ==> <img src="./images/paper.png" alt="Rock" style="width:30px"/> "YOU TIRED"  <img src="./images/${choice[cResponse]}.png" alt="Rock" style="width:30px"/> <== Computer's`;
    }
    else if(cResponse == 2){
        message.innerHTML = `Your's ==> <img src="./images/paper.png" alt="Rock" style="width:30px"/> "YOU WIN"  <img src="./images/${choice[cResponse]}.png" alt="Rock" style="width:30px"/> <== Computer's`;
        yScoreValue++;
        yScoreElement.innerHTML = yScoreValue;
    }
    else{
        message.innerHTML = `Your's ==> <img src="./images/paper.png" alt="Rock" style="width:30px"/> "YOU LOSE"  <img src="./images/${choice[cResponse]}.png" alt="Rock" style="width:30px"/> <== Computer's`;
        cScoreValue++;
        cScoreElement.innerHTML = cScoreValue;
        
    }
}
const paperClick = () => {
    const cResponse = getRandomInt(0,2);
    if(cResponse == 2){
        message.innerHTML = `Your's ==> <img src="./images/scissors.png" alt="Rock" style="width:30px"/> "YOU TIRED"  <img src="./images/${choice[cResponse]}.png" alt="Rock" style="width:30px"/> <== Computer's`;
    }
    else if(cResponse == 0){
        message.innerHTML = `Your's ==> <img src="./images/scissors.png" alt="Rock" style="width:30px"/> "YOU WIN"  <img src="./images/${choice[cResponse]}.png" alt="Rock" style="width:30px"/> <== Computer's`;
        yScoreValue++;
        yScoreElement.innerHTML = yScoreValue;
    }
    else{
        message.innerHTML = `Your's ==> <img src="./images/scissors.png" alt="Rock" style="width:30px"/> "YOU LOSE"  <img src="./images/${choice[cResponse]}.png" alt="Rock" style="width:30px"/> <== Computer's`;
        cScoreValue30px
        cScoreElement.innerHTML = cScoreValue;
        
    }
} 
const showDialog = () => {
    if(yScoreValue >= 10 || cScoreValue >= 10){
        var txt = yScoreValue > cScoreValue ? 'Win' : 'Lose'
        var diff = Math.abs(yScoreValue - cScoreValue)
        window.alert(`You ${txt} by ${diff} points.`)
        yScoreElement.innerHTML = 0;
        yScoreValue = 0;
        cScoreElement.innerHTML = 0;
        cScoreValue = 0;

    }
}
rock.addEventListener('click',rockClick);
paper.addEventListener('click',paperClick);
scissor.addEventListener('click',scissorClick);
btn.addEventListener('click',showDialog)


