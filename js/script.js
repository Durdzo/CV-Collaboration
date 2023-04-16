const button = document.getElementById("burger-btn");
const nav = document.getElementById("nav-box");

button.addEventListener("click", () => {
    nav.classList.toggle("show");
});
