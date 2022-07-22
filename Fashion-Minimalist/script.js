document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menubar");
  menu.addEventListener("click", toggleMenu);
});

const toggleMenu = () => {
  const menu = document.querySelector(".menubar");
  menu.classList.toggle("active");
};
