const form = document.querySelector(".user-form");
const currentPlayer = document.querySelector(".user-form");
const usernameInput = form.firstElementChild;


form.addEventListener("submit", e => {
  e.preventDefault();

  if (usernameInput.value.length < 2) {
    // update error element
    console.log("Your name must be at least 2 characters.")
  } else {
    // update username in DOM
    currentPlayer.textContent = `Now playing: ${usernameInput.value}`;
    // call function to render the game
  }
})