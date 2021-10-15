// Array To Store The Data
let myLeads = []

// Getting Data From LocalStorage And Pushing Into Array
let leadFromLocalStorage= JSON.parse(localStorage.getItem("myleads"))

//Query Selectors
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const deleteAllBtn = document.getElementById('delete-all-btn')
const tabBtn = document.getElementById('tab-btn')

//Initialiser
if(leadFromLocalStorage){
    myLeads=leadFromLocalStorage
    render(myLeads)
}

// Render The Inputed Leads
function render(leads){
    let listItems=""
    for (let index = 0; index < leads.length; index++) {
        listItems+=
            `<li>
                <a href="${leads[index]}" target="_blank"> ${leads[index]} </a>
            </li>`
    }
    ulEl.innerHTML=listItems
}

//Event Listeners
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myleads",JSON.stringify(myLeads))
    render(myLeads)
})

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true,curentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteAllBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

