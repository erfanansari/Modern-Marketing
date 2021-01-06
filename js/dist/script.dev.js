'use strict';

// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");
//   const body = document.querySelector("body");
//   //Toggle nav
//   burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//     // i.classList.toggle('far fa-bars');
//     //Animate Links
// navLinks.forEach((link, index) => {
//   if (link.style.animation == "") {
//     // link.style.background = "";
//     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
//   } else {
//   }
// });
// });
// };
//
// my code
window.scrollTo();
var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav-links');
var navLinks = document.querySelectorAll('.nav-links li');
var body = document.querySelector('body');
var signUp = document.getElementById('sign-up');
var logo = document.getElementById('logo');

burger.onclick = function burgerClick() {
  nav.classList.toggle('nav-active');
  body.classList.toggle('bg-blur');
  signUp.classList.toggle('bg-blur-sign-up');
  navLinks.forEach(function (link, index) {
    if (link.style.animation == '') {
      // link.style.background = "";
      link.style.animation = 'navLinkFade 0.5s ease forwards '.concat(
        index / 7 + 0.4,
        's'
      );
    } else {
      // animate     = () =>{
      link.style.animation = ''; // }
      // setTimeout(animate,300);
    }
  });
};

burgerClick();
