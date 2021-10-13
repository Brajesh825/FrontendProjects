
// Array to store the data
let myLeads = []

//Query Selectors
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

//Event Listeners
inputBtn.addEventListener("click", function(){
    // Getting Value from input element directly
    let lead = inputEl.value
    inputEl.value=""
    myLeads.push(lead)
    renderLeads()
})

function renderLeads(){
    let listItems=""
    for (let index = 0; index < myLeads.length; index++) {
        listItems+=
            `<li>
                <a href="${myLeads[index]}" target="_blank"> ${myLeads[index]} </a>
            </li>`
    }
    ulEl.innerHTML=listItems
}


