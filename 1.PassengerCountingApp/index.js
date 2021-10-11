
let saveEl = document.getElementById('save-el')
let countEl= document.getElementById('count-el');

let count=0

function increment () {
    count++
    countEl.textContent = count
}
function save() {
    let countStr = saveEl.textContent
    countStr+= " " + count

    saveEl.textContent = countStr
    reset()
}
function reset() {
    count=0
    countEl.textContent=0
}