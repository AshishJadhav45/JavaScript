//document.getElementById("count").innerText = 5
// DOM  => Document object model


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let countdl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
} 



function decrement() {
    count -= 1
    countdl.textContent = count

}


//  Create a save button function


function save() {
    let countStr = count + " | "

    saveEl.textContent += countStr
    countEl.textContent = 0 
    count = 0
}




