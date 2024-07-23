const hambugerIcon = document.querySelector(".menu-container")

const navVertical = document.querySelector(".nav-bar-vertical");
const closeIcon = document.querySelector(".close-menu-container");


hambugerIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    navVertical.classList.add("open-menu");

});

closeIcon.addEventListener("click", () => {
    navVertical.classList.remove("open-menu");
});

window.addEventListener("click", () => {
    navVertical.classList.remove("open-menu");
});