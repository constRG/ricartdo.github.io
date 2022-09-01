const hamburger_menu_btn = document.querySelector("#hamburger-menu-btn");
const nav_menu = document.querySelector(".nav-menu");

hamburger_menu_btn.addEventListener("click", () => {
    hamburger_menu_btn.classList.toggle("active-hamburger-menu-btn");
    nav_menu.classList.toggle("active-nav-menu");
});