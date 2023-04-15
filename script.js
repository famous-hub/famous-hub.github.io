const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLink = document .getElementsByClassName('navbar-link')[0]

toggleButton.addEventListener('click',()=>{
navbarLink.classList.toggle('active')
}
)