
let countEl= document.getElementById('count-el');
count=countEl.innerText

function increment () {
    count++
    countEl.innerText = count
}

function save() {
    console.log(count);
}