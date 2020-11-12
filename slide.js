let slider = document.querySelector('.container__slider__arrow')
slider.addEventListener('click', slide)

let line = document.querySelector('.container__slider__images')

let img = document.querySelector('.container__slider__images__img')
let num = img.offsetWidth
let dot = document.querySelectorAll('.container__slider__dots__dot')
let timer
let count = 0;
let range = document.querySelector('#range')
let karusel = document.querySelector('.container__karusel')
let menu = document.querySelector('.container__logo__menu')
let fullSlideMenu = document.querySelector('.container__logo__menu__ul')
let logo = document.querySelector('.container__logo')
function autoSlide(){
    timer = setTimeout(slide, 3500)
}
autoSlide()
function slide() { 
    count++
    if(count == 0) {
        dot[0].classList.add('active')
        dot[1].classList.remove('active')
        dot[2].classList.remove('active')
    }
    if(count == 1){
        dot[0].classList.remove('active')
        dot[1].classList.add('active')
        dot[2].classList.remove('active')
    }
    if(count == 2) {
        dot[0].classList.remove('active')
        dot[1].classList.remove('active')
        dot[2].classList.add('active')
        count = -1
    }
    
    line.style.left = -num + 'px';
    num = img.offsetWidth + num
   
    if(num >= img.offsetWidth * 3) {
        num = 0
    }
    autoSlide()
}

line.addEventListener('click', stopSlide)

function stopSlide() {
    clearTimeout(timer)
}

range.addEventListener('input', rangeSlide)
range.max =  karusel.offsetWidth - 900
range.value = (karusel.offsetWidth - 900) / 2
function rangeSlide(event){
    
    karusel.style.left = -event.target.value + 'px'
    
   
}


menu.addEventListener('mouseover', fullMenu)

function fullMenu () {
    let slideMenu = document.querySelector('.container__logo__menu__ul')
    slideMenu.style.transform = 'scaleY(1)'
    logo.style.background = '#3B3B3B'
}

fullSlideMenu.addEventListener('mouseout', hideMenu)

function hideMenu() {
    let slideMenu = document.querySelector('.container__logo__menu__ul')
    slideMenu.style.transform = 'scaleY(0)'
}