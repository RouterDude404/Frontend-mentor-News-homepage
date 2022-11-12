const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-links");
const container = document.querySelector(".container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
  container.classList.toggle('menu-open');
})