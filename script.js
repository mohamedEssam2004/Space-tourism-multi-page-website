const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbar = document.querySelector("nav ul");

if (bar) {
    bar.addEventListener("click", () => {
        navbar.classList.add("active");
    });
}
if (close) {
    close.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
}