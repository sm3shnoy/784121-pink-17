var toggleMenu = document.querySelector(".main-nav__toggle");
var mainHeader = document.querySelector(".header");
var navMain = document.querySelector(".main-nav");

navMain.classList.remove("main-nav--nojs");

toggleMenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  }

  mainHeader.classList.toggle("header--open");
});

window.onload = function() {
  svg4everybody();
}
