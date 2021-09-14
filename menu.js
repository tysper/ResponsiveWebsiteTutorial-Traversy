"use strict";

const menuOpenBtn = document.querySelector(".menu-toggler-btn");
const menuCloseBtn = document.querySelector(".close-btn-menu");
const menuBar = document.querySelectorAll(".menu-group");

const toggleMenu = () => {
  menuBar.forEach((x) => x.classList.toggle("hidden"))
};

menuOpenBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", toggleMenu);