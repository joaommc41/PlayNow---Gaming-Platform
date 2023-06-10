'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


function alterarImagem1() {
  var imgElement = document.getElementById("imagem");
  imgElement.src = "https://new-cdn.80.lv/upload/content/e8/images/5d2d4b858c7f7/widen_920x0.png";
}

function alterarImagem2() {
  var imgElement = document.getElementById("imagem");
  imgElement.src = "https://cdn.80.lv/api/upload/content/4b/images/5d2d4b7c118ce/widen_1840x0.png";
}

function alterarImagem3() {
  var imgElement = document.getElementById("imagem");
  imgElement.src = "https://cdn.80.lv/api/upload/content/4e/images/5d2d4b7f6885c/widen_1840x0.png";
}

function alterarImagem4() {
  var imgElement = document.getElementById("imagem");
  imgElement.src = "https://cdn.80.lv/api/upload/content/9d/images/5d2d4b82b455e/widen_1840x0.png";
}
