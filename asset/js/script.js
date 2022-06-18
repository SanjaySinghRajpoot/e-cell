const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
try {
  
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('expanded')
})
} catch (error) {
  
}

const buttonOne = document.querySelector(".collapse.one");

buttonOne.onclick = () => {
  document.querySelector(".collapsible.one").classList.toggle("expanded");
  buttonOne.classList.toggle("toggled");
}

const buttonTwo = document.querySelector(".collapse.two");

buttonTwo.onclick = () => {
  document.querySelector(".collapsible.two").classList.toggle("expanded");
  buttonTwo.classList.toggle("toggled");
}

