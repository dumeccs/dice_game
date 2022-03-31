rollBtn =document.getElementById('rollBtn')
resetBtn =document.getElementById('resetBtn')
const player1Box = document.getElementById('player1Dice')
const player2Box = document.getElementById('player2Dice')
let player1Score = document.getElementById('player1Scoreboard')
let player2Score = document.getElementById('player2Scoreboard')
const displayMessage = document.getElementById('message')






    const players = []
    rollBtn.addEventListener('click', function(){
        resetBtn.style.display = 'block'
        let randomNumber = Math.floor(Math.random()*6 + 1)
        players.push(randomNumber)
        let score1 = 0
        let score2 = 0

    for(let i = 0; i < players.length; i++){
        if(players.length % 2 ){
            player1Box.textContent = randomNumber
            score1 += players[i]
            player1Score.textContent = score1
            displayMessage.textContent = 'player 1 turn'
           }
           else{
            player2Box.textContent = randomNumber
            score2 += players[i]
            player2Score.textContent = score2
            displayMessage.textContent = 'player 2 turn'
           }
    } 
        
    })

    resetBtn.addEventListener('click', function(){

    })



//features of the game - remember development is all about adding features on by one

/*
1. When the dice button is clicked the number generated appear for the first time on player one
2. That number is not thrown away it is calculated as score for player one
3. It displays player one at the top
4. Roll it switches to player 2 and the same process is repeated
5. Lastly a reset button can start the game from scratch



*/