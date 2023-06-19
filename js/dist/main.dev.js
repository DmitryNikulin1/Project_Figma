"use strict";

(function () {
  var header = document.querySelector('.header');

  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  };
})()( // Burger handler
function () {
  var burgerItem = document.querySelector('.burger');
  var menu = document.querySelector('.header__nav');
  var menuClose = document.querySelector('.header__nav-close');
  burgerItem.addEventListener('click', function () {
    menu.classList.add('header__nav-active');
  });
  menuClose.addEventListener('click', function () {
    menu.classList.remove('header__nav-active');
  });
}());
//# sourceMappingURL=main.dev.js.map
