//Global Variables
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

//Player Information
let player ={
    name:"Brajesh",
    chips:100
}
player.name=prompt("Please Enter Your Name")

//QuerySelectors
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
let startEl = document.getElementById('start-el')
let newCardEl = document.getElementById('new-card-el')

//Assigning Player Values
playerEl.textContent =  `${player.name}: $${player.chips} `

function updatePlayer(){
    if(hasBlackJack){
        hasBlackJack=false
        player.chips+=5
    }else{
        player.chips-=1
    }
    isAlive=false
    playerEl.textContent =  `${player.name}: $${player.chips} `
    startEl.style.backgroundColor = "goldenrod"
    newCardEl.style.backgroundColor = "#ccc"
}

function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1;
    if (randomNumber===1) {
        return 11;
    }else if(randomNumber>=11){
        return 10;
    }else{
        return randomNumber;
    }
}

function startGame(){
    if(!isAlive){
        isAlive=true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards =[firstCard,secondCard]
        sum = firstCard + secondCard
        startEl.style.backgroundColor = "#ccc"
        newCardEl.style.backgroundColor = "goldenrod"
        renderGame()
    }
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let newCard =getRandomCard()
        cards.push(newCard)
        sum+=newCard
        renderGame()
    }
}

function renderGame(){   
    let cardElement = ""
    cards.forEach(element => {
        cardElement+=element+" "
    })
    cardsEl.textContent = `Cards : ${cardElement}`
    sumEl.textContent = `Sum : ${sum}`
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        updatePlayer()
    } else {
        message = "You're out of the game!"
        isAlive = false
        updatePlayer()
    }
    messageEl.textContent= message
} 

