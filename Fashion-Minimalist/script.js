document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menubar");
  menu.addEventListener("click", toggleMenu);
});

const toggleMenu = () => {
  const menu = document.querySelector(".menubar");
  const mobile = document.querySelector(".mobile");
  menu.classList.toggle("active");
  mobile.classList.toggle("active");
};
