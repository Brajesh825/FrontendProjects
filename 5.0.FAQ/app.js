//using selectors inside the element
const questions = document.querySelectorAll('.question')

questions.forEach(function(element){
    const btn = element.querySelector('.question-btn')
    btn.addEventListener('click',function(){
        
        questions.forEach(function(item){
            if(item!=element){
                item.classList.remove('show-text')
            }
        })

        element.classList.toggle('show-text')
    })
})

// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
//     })
// })