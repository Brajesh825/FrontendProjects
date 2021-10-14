// Array To Store The Data
let myLeads = []

// Getting Data From LocalStorage And Pushing Into Array
let leadFromLocalStorage= JSON.parse(localStorage.getItem("myleads"))

//Query Selectors
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const deleteAllBtn = document.getElementById('delete-all-btn')

//Initialiser
if(leadFromLocalStorage){
    myLeads=leadFromLocalStorage
    renderLeads()
}

//Event Listeners
inputBtn.addEventListener("click", function(){
// Getting Value from input element directly
    myLeads.push(inputEl.value)
    inputEl.value=""
// Saving myLeads array to local storage after converting to string
    localStorage.setItem("myleads",JSON.stringify(myLeads))
    renderLeads()
})
deleteAllBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
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
    }
    ulEl.innerHTML=listItems
}
