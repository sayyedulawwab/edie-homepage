const mobileMenu = document.querySelector(".mobile-menu");
const list = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-list a");

function toggle() {
  list.classList.toggle("active");
}

mobileMenu.addEventListener("click", toggle);
navLink.forEach((n) => n.addEventListener("click", toggle));
