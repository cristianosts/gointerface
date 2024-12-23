let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0 
let firstP = 0
let lastP = items.length - 1

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')

    itemOld.classList.remove('active')

    active = active + 1 > lastP ? 0 : active + 1

    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')

    dotsOld.classList.remove('active')  
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')

    itemOld.classList.remove('active')

    active = active - 1 < firstP ? lastP : active - 1

    items[active].classList.add('active')

}