let selectBox = document.querySelector('.selectBox')
let arrow = document.querySelector('.fa-chevron-right')
let text = document.querySelector('.text')
let listItem = document.querySelectorAll('li')
let list = document.querySelector('#list')

selectBox.onclick = () => {
    arrow.classList.toggle('rotate')
    list.classList.toggle('hide')
}

function handle(e) {
    text.innerHTML = e.target.textContent
    list.classList.toggle('hide')
    arrow.classList.toggle('rotate')
}

listItem.forEach((item) => {
    item.addEventListener('click', handle)
})