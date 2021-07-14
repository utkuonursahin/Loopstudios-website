const container = document.querySelector('.container')
const mobileMenu = document.querySelector('.mobile__menu')
const iconClose = document.querySelector('.icon-close')
const hamburgerIcon = document.querySelector('.hamburger-icon')

const mobileMenuModal = function () {
    mobileMenu.classList.toggle('hidden')
    container.classList.toggle('hidden')
}

hamburgerIcon.addEventListener('click', mobileMenuModal)
iconClose.addEventListener('click', mobileMenuModal)