// let FirstCard = 20
// let secondCard = 1

// let sum = FirstCard + secondCard

// if (sum < 21){
//     console.log("Do you want to Draw the game")
// }
// else if(sum === 21){
//     console.log("hurrey you won the game")
// }
// else{
//     console.log("You lost the game")
// }

// valid age for enterning in the club

// let age = 24

// if (age > 18){
//     console.log("You allow to enter in the club")
// }
// else{
//     console.log("Sorry You can't allow to club")
// }
/*
let age = 100
let me = false
let isLive = true
let message = ""
if (age<100){
    message = ("Not Eligible")
}
else if (age === 100){
    message =("Here are the bithday card from the King")
    me = true
}
else{
    message =("Not eligible You have already gotten one")
    isLive = false
    
}

console.log(isLive)
console.log(message)


//  Array - Order list of items


let alphabet = [
    "a",
    "b", 
    "c"
]

console.log(alphabet)

let exprience = ["Studen", "SDA1","sd2","manager", "cto","ceo"]
exprience.pop()
console.log(exprience)
console.log(exprience[3])

let number = [1,23,4]
number.push(45)
console.log(number)
*/

// For loop

// for (let i = 10; i<101; i+= 10){
//     console.log(i)
// }
// let sentence = ["my","name","is","Khan"]


// let greeting = document.getElementById("greeting-el")

// for (let i = 0 ; i<sentence.length; i++){
//     greeting.textContent += sentence[i] + " "
// }


/*
let Player1time = 102
let Player2time = 104

function GetFastestRaceTime(){
    if (Player1time<Player2time){
        return Player1time
    }
    else if (Player2time < Player1time){
        return Player2time
    }
    else{
        return Player1time
    }
}
let finaltime = GetFastestRaceTime()
console.log(finaltime)

function totaltime(){
    return Player1time + Player2time

}

let total = totaltime()
console.log(total)
*/
/*
// Random Number in JavaScript

let RandomNumber = Math.random() * 6
console.log(RandomNumber)
//  what it does it provide number between - 0 to 1 it could be 0.39828183 like that upto 0.99999 and so on
*/

// Math.floor

// let flooredNumber = Math.floor(23.4422)
// console.log(flooredNumber)

// What it does it remove decimals
// answer is 23

/*

function rolldice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber

}

console.log(rolldice())
*/

// Logical Operator 

/*
let HasCompletedCourse = true
let GivesCertificate = true

if (HasCompletedCourse===true && GivesCertificate===true){
    generateCertificate()
}
function generateCertificate(){
    console.log( "Generating Certificate")
}

// the logical or Operator

let IndiaWin = true
let kohliOut = false

if (IndiaWin===true || kohliOut === false){
    india()
}
function india(){
    console.log("No matter what Happened India always win !")
}

*/

/*
// Object 

let object = {
    iskingalive: true,
    kingdiaries : "kingMahal",
    price : 322,
    place:["nearbyarmsrong","UK"]


}

console.log(object.iskingalive)
console.log(object.price)


let person = {
    name:"Per",
    age : 34,
    country: "United Kingdom"

}

function LogData(){
   console.log(person.name +" is "+person.age+" old and he lives in "+person.country)
}
LogData()


let age = 65

if (age < 6){
    console.log("free pass")
}
else if (age < 18){
    console.log("child discount")
}
else if (age < 27){
    console.log("Student Pass")
}
else if ( age < 66){
    console.log("Full Price")
}
else {
    console.log("Senior Citizen Discount")
}
*/

/*
// Loops and Array

largecountry = ["india","china","USA","indonesia","Pakistan"]

console.log("This is are Largest country in the Worlds")

for (let i = 0; i < largecountry.length; i++){
    console.log("- " + largecountry[i])


}
/*

//  push pop and unshift , shift 

console.log(largecountry.pop())
console.log(largecountry.push("Japan"))
console.log(largecountry.shift())

console.log(largecountry.unshift())
console.log(largecountry)



*/

// Logical operator

// date = 23
// day = "sunday"

// if (date === 23 && day === "sunday"){
//     console.log("its a holiday ")
// }


// let fruit = ["a","o","o","a","o"]

// appleself = document.getElementById("apple")
// orangeself = document.getElementById("orange")

// function sortFruit(){
//     for (i=0; i< fruit.length; i++){
//         if (fruit[i] === "a"){
//             appleself.textContent += "apples!"
//         }
//         else if (fruit[i] === "o"){

//             orangeself.textContent += "orranges!"
//         }
//     }
// }

// sortFruit()
// const welcomeEl = document.getElementById("welcome")

// function greeting(greet,name){
//     welcomeEl.textContent = `${greet} , ${name}` 

// }
// greeting("welcome","Neo")

// function add(a,b){
//     return a + b
// }

// console.log(add(3,4))
// console.log((9,102))


let myCourse = ["Html","css","javascript"]

function coursera(arr){
    for (let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

coursera(myCourse)