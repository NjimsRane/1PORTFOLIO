const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");
const HeroImage = document.querySelector(".heroImage");




hamburgerMenu.addEventListener("click",menuChange);

function menuChange(){
  hamburgerMenu.classList.toggle("hamburgerMenuChange");
  navMenu.classList.toggle("navMenuChange");
  HeroImage.classList.toggle("heroImageChange")
}