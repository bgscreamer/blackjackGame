// 1. Create two variables, firstCard and secondCard. 
// 2. Create a variable, sum, and set it to the sum of the two cards
// Set their values to a random number between 2-11

//let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
//console.log(firstCard)

//let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
//console.log(secondCard)



//console.log(sumCards)



//let firstCard = 10

//let secondCard = 12

//let sumCards = firstCard + secondCard
let player = {
	
	name: "Niko",
	chips: 289,
	sayHello: function(){
	console.log("Zdrasti!")}
	
	
	
}
let cards = []
let sumCards = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")
let newBtn = document.querySelector("#cardBtn")
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name +": $" + player.chips

console.log(message)

function startGame(){
	
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	
	cards.push(firstCard)
	cards.push(secondCard)
	
	sumCards = cards[0] + cards[1]
	
	isAlive = true
	
	renderGame()
	
	
	
}


function getRandomCard(){
	
	let randomNumber = Math.floor(Math.random() * 13) + 1
	
	
	if(randomNumber>10){
		return 10
	}else if(randomNumber === 1){
		return 11
	}else{
		return randomNumber
	}
	
	
}
console.log(getRandomCard())



function renderGame(){
	if(sumCards <= 20){
		message = "Do you want to draw a card?"
	} else if(sumCards === 21){
		message = "BLACKJACK!!!"
		hasBlackJack = true
	} else{
	isAlive = false
	
	message = "You've Lost!"
	}
	messageEl.textContent = message
	sumEl.textContent = "Sum: " + sumCards
	cardsEl.textContent = "Cards: "
	for(let i = 0;i<cards.length;i++){
		cardsEl.textContent += cards[i] + " "
	}
	
		
	
	
	
}


function newCard(){
	
	//let thirdCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
	if(isAlive === true && hasBlackJack === false){
		let thirdCard = getRandomCard()
	
		sumCards += thirdCard
		cards.push(thirdCard)
		renderGame()
	}
		
	
	// let newSum = sumCards + cards[2]
	
	// if(newSum <=20){
		// message = "Do you want to draw a card?"
	// }else if(newSum === 21){
		// message = "BLACKJACK!!!"
		// hasBlackJack = true
	// }else{
		// isAlive = false
		// message = "You've Lost!"
	// }
	
	// newBtn.addEventListener('click',() => {
		// let newestSum = sumCards + thirdCard + fourthCard
		
		// if(newestSum <=20){
			// message = "Do you want to draw a card?"
		// }else if(newestSum === 21){
			// message = "BLACKJACK!!!"
			// hasBlackJack = true
		// }else{
			// isAlive = false
			// message = "You've Lost!"
			// newBtn.removeEventListener('click',newBtn)
		// }
			
		// messageEl.textContent = message
		// sumEl.textContent = "Sum: " + newestSum
		// cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2] + " " + cards[3]
	// })
		
		
		
		
	// messageEl.textContent = message
	// sumEl.textContent = "Sum: " + newSum
	// cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2]
		
	
	
	
	
}
	

console.log(isAlive)
console.log(hasBlackJack)

let age = 101

if(age < 100){
	console.log("Not Eligible!")
} else if(age === 100){
	console.log("Here is your birthday card !")
	}else{
	console.log("Not eligible, you already had one!")}
	
for(let i = 10; i<101;i+=10){
console.log(i)}

let messages = [
	"Hey, how's it going?",
	"I'm great, thank you! How about you?",
	"All good. Been working on my portfolio lately.",
	"Same here!",
	"Whoop"
]













	
	
	

	
