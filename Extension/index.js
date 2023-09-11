let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input");
const inputbutton = document.getElementById("button");
const ulel = document.getElementById("ul-el");
const deletebtn = document.getElementById("delete");

const tabBtn = document.getElementById("savetab");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) || [];
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage.length > 0){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

function render(leads){
    let mylist = "";
    for (let i = 0; i < leads.length; i++) {

        mylist += `
        <li>
            <a target="_blank" href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>`;
    }
    ulel.innerHTML = mylist;
}

deletebtn.addEventListener("dblclick", function(){
    console.log("double clicked");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

inputbutton.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    console.log(localStorage.getItem("myLeads"));
});
