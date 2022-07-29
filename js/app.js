const navHamburger = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav__list");
const header = document.querySelector(".header");
const navLines = document.querySelectorAll(".nav__line");
navHamburger.addEventListener("click", () => {
  navList.classList.toggle("nav__list--active");
  navLines.forEach((line) => line.classList.toggle("nav__line--active"));
});

const getWindowHeight = () => {
  return window.scrollY;
};

window.addEventListener("scroll", () => {
  window.addEventListener("scroll", () => {
    if (getWindowHeight() > 0) {
      header.classList.add("header--active");
    } else {
      header.classList.remove("header--active");
    }
  });
});

navHamburger.addEventListener("click", () => {
  if (getWindowHeight() === 0) {
    header.classList.toggle("header--active");
  }
  header.classList.toggle("nav--active");
});
