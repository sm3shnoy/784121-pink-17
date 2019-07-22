var toggleMenu = document.querySelector(".main-nav__toggle");
var mainMenu = document.querySelector(".main-nav__list");
var mainHeader = document.querySelector(".header");

toggleMenu.addEventListener("click", function(evt) {
  evt.preventDefault();

  mainMenu.classList.toggle("site-list--open");
  mainHeader.classList.toggle("header--open");
});
