"use strict";

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links_wrapper');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});