
const model = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')
const modalImg = document.querySelector('.modal-img')

for (let i = 0; i < document.images.length; i++) {
    document.images[i].onclick = function(){
        model.classList.add('open-modal')
        modalImg.src= document.images[i].src
    }
}

closeBtn.addEventListener("click",function(){
    model.classList.remove('open-modal')
})