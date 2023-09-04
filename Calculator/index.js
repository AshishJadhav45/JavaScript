let num1 = 5
let num2 = 5

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

sum = documetn.getElementById("sum")

function add(){
    let result = num1 + num2
    sum.textContent = "The sum is :" + result
}

function mul(){
    let result = num1 * num2
    sum.textContent = "The sum is :" + result
}

function sub(){
    let result = num1 - num2
    sum.textContent = "The sum is :" + result
}

function div(){
    let result = num1 / num2
    sum.textContent = "The sum is :" + result
}