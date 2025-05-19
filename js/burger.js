let links = document.querySelectorAll("nav li");
let burger = document.getElementById("burger");
let nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("burger-active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("burger-active");
  });
});