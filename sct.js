let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0 
let firstP = 0
let lastP = items.length - 1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')

    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')

    dotsOld.classList.remove('active')  
    dots[active].classList.add('active')

    indicator.querySelector('.numbers').innerHTML = '0' + (active + 1)

}

nextButton.onclick = () => {
    active = active + 1 > lastP ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')

}

prevButton.onclick = () => {
    active = active - 1 < firstP ? lastP : active - 1
    setSlider()
    items[active].classList.add('active')

}