// button animation
const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {
  if (menuButton.matches(".open")) {
    menuButton.classList.remove("open");
  } else {
    menuButton.classList.add("open");
  }
});
