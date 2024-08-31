const navbar = document.querySelectorAll('.navbar-collapse a')
const dropdownIcon = document.querySelector('.dropdown')
const logo = document.querySelector('.logo')
const logob = document.querySelector('.logo-b')
const icons = document.querySelectorAll('.social-icons img')
const toggle = document.querySelector('.dropdown-toggle')
const dropdown = document.querySelector('.navbar-drop-down')

console.log(logo,logob);


dropdownIcon.addEventListener('click', () => {
    dropdown.classList.toggle('hide')

    logo.classList.toggle('hide')
    logob.classList.toggle('hide')

    navbar.forEach((item) => {
        item.classList.toggle('black')
        item.style.fontWeight = '600'
    });

    icons.forEach((item) => {
        item.classList.toggle('filter-icons')
    })
})