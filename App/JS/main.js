const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navBar = document.querySelector(".navBar");
const heroImage = document.querySelector(".heroImage");
const heading = document.querySelector(".heading");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hamburgerMenuChange");
  navBar.classList.toggle("navBarChange");
  heroImage.classList.toggle("heroImageChange");
  heading.classList.toggle("headingChange");
});
