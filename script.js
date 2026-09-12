const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.onclick = function () {
    navLinks.classList.toggle("active");
};