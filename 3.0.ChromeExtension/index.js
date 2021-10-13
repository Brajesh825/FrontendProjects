
// Array to store the data
let myLeads = ["a","b"]

//Query Selectors
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

//Event Listeners
inputBtn.addEventListener("click", function(){
    // Getting Value from input element directly
    let lead = inputEl.value
    myLeads.push(lead)
})

let ListItems=""
for (let index = 0; index < myLeads.length; index++) {
    ListItems+=`<li> ${myLeads[index]} </li>`
}

ulEl.innerHTML=ListItems