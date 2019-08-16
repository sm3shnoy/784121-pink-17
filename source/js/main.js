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

// // форма

// var send = document.querySelector(".main-form__button");
// var errorMsg = document.querySelector("competitive__message-error");
// var okMsg = document.querySelector("competitive__message-ok");
// var closeMsgButtons = document.querySelectorAll("competitive__message-button");

// var email = document.querySelector("[name=email]");

// send.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   if (!email.value) {
//     okMsg.classList.remove("competitive__show-message");
//     errorMsg.classList.add("competitive__show-message");
//   } else {
//     errorMsg.classList.remove("competitive__show-message");
//     okMsg.classList.add("competitive__show-message");
//   }
// });


// for (var i = 0, len = closeMsgButtons.length; i < len; i++) {
//   closeMsgButtons[i].addEventListener("click", function(evt) {
//     evt.preventDefault();
//     this.parentElement.classList.remove("competitive__show-message");
//   });
// }
