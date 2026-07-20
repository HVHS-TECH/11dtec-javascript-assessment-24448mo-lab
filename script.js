console.log("Hello world!")

alert("Welcome to my first Javascript program!")

//var userName = prompt(“What is your name?”, “???”)

var userName = prompt ("Welcome to this website! \n Please enter ur name")

console.log("Hello, " + userName + "!")

var userAge = prompt ("How old are you?")

console.log("You are " + userAge + " years old!")

var userFood = prompt ("What are you choosing today? 1. Sprite ($2) 2. Burger ($5) 3. Cake ($3)")

if (userFood == "1") {
    console.log("You have chosen Sprite. Your total is $2.")
} else if (userFood == "2") {
    console.log("You have chosen Burger. Your total is $5.")
} else if (userFood == "3") {
    console.log("You have chosen Cake. Your total is $3.")
}

alert("Thank you for visiting my website, " + userName + "!")     