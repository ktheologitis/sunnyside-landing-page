let navMenu = document.getElementById("popup-menu");

const toggleMenu = () => {
    let currentDisplayVal = window.getComputedStyle(navMenu).getPropertyValue('display');
    navMenu.style.display = currentDisplayVal === "none" ? "flex" : "none";
}