const board = document.getElementById("board");
const form = document.querySelector(".user-form");
const currentPlayer = document.querySelector(".user-form");
const usernameInput = form.firstElementChild;


form.addEventListener("submit", e => {
  e.preventDefault();

  if (usernameInput.value.length < 2) {
    // update error element
    console.log("Your name must be at least 2 characters.")
  } else {
    currentPlayer.textContent = `Now playing: ${usernameInput.value}`;
    renderBoard();
  }
});

function renderBoard() {
  for (let i = 0; i < 16; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    setTimeout(() => {
      board.appendChild(card);  
    }, 50 * i);
  }
}

