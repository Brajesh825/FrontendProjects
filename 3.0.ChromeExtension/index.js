// Array To Store The Data
let myLeads = []

//Query Selectors
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

//Local Storage Handle
function populate() {
    for (let index = 0; index < localStorage.length; index++) {
        myLeads.push(localStorage.getItem(`myLeads:${index}`))
    }    
}

//Event Listeners
inputBtn.addEventListener("click", function(){
// Getting Value from input element directly
    let lead = inputEl.value
    inputEl.value=""
    myLeads.push(lead)
    renderLeads()
})

// Render The Inputed Links
function renderLeads(){
    let listItems=""
    for (let index = 0; index < myLeads.length; index++) {
        listItems+=
            `<li>
                <a href="${myLeads[index]}" target="_blank"> ${myLeads[index]} </a>
            </li>`
            localStorage.setItem(`myLeads:${index}`,myLeads[index])
    }
    ulEl.innerHTML=listItems
}

// Initialisers
populate()
renderLeads()
