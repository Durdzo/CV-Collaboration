const button = document.getElementById("burger-btn");
const nav = document.getElementById("nav-box");
const links = document.querySelectorAll(".nav-item");
const footerYear = document.querySelector(".footer-year");

button.addEventListener("click", () => {
    nav.classList.toggle("show");

    links.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("show");
        });
    });
});

const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
};

handleCurrentYear();
