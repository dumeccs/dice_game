let player1Score = 0;
let player2Score = 0;
let player1turn = true;

const rollBtn =document.getElementById('rollBtn')
const resetBtn =document.getElementById('resetBtn')

const player1Box = document.getElementById('player1Dice')
const player2Box = document.getElementById('player2Dice')
let player1Scoreboard = document.getElementById('player1Scoreboard')
let player2Scoreboard = document.getElementById('player2Scoreboard')
const displayMessage = document.getElementById('message')



function toggleButtons(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


rollBtn.addEventListener('click', function(){
       let randomNumber = Math.floor(Math.random()*6 + 1)
       if(player1turn){
           player1Box.textContent =  randomNumber
           player1Score += randomNumber
           player1Scoreboard.textContent = player1Score
           player2Box.classList.add('active')
           player1Box.classList.remove('active')
           message.textContent = "Player 1 Turn"

       }
       else{
          player2Box.textContent = randomNumber
          player2Score += randomNumber
          player2Scoreboard.textContent = player2Score
          player2Box.classList.remove('active')
          player1Box.classList.add('active')
          message.textContent = "Player 2 Turn"
       }

        player1turn = !player1turn
       if(player1Score >= 20){
           message.textContent = "Player 1 has won 😃"
           toggleButtons()
       } 
       else if(player2Score >=20){
           message.textContent = "Player 2 has won 😃"
           toggleButtons()
       }
           
})

function reset(){
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    message.textContent = "Player 1 Turn"
    player1Score = 0;
    player2Score = 0;
    player1turn = true;
    player1Box.textContent =  0
    player2Box.textContent =  0
    player2Box.classList.remove('active')
    player1Box.classList.add('active')
    rollBtn.style.display = "block"
    resetBtn.style.display ="none"
}
    
resetBtn.addEventListener('click', reset)

//features of the game - remember development is all about adding features on by one

/*
1. When the dice button is clicked the number generated appear for the first time on player one
2. That number is not thrown away it is calculated as score for player one
3. It displays player one at the top
4. Roll it switches to player 2 and the same process is repeated
5. Lastly a reset button can start the game from scratch

    some cool features I want to add
    ***make it rain portpourri when a player wins***
    ***Randomize who plays first***


*/

