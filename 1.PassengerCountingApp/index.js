
let saveEl = document.getElementById('save-el')
let countEl= document.getElementById('count-el');

count=countEl.innerText
function increment () {
    count++
    countEl.innerText = count
}

function save() {
    let saved = saveEl.innerText
    saved+= " " + count
    saveEl.innerText = saved
    console.log(count);
}