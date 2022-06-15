// button animation
const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {
  if (menuButton.matches(".open")) {
    menuButton.classList.remove("open");
  } else {
    menuButton.classList.add("open");
  }
});

//change text
const greeting = document.querySelector(".greeting");

function changeText() {
  greeting.innerHTML = `<h1>Have a good time!</h1>`;
}

greeting.addEventListener("click", changeText);
