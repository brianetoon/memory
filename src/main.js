const board = document.getElementById("board");
const form = document.querySelector(".user-form");
const currentPlayer = document.querySelector(".current-player");
const usernameInput = form.firstElementChild;
const boardStagger = 50;
let choiceOne = null;
let choiceTwo = null;
let turns = 0;

const cardImages = [
  "banana",
  "brownlab",
  "corgi",
  "goldenpuppy",
  "greenpug",
  "husky",
  "kingcharles",
  "sleepy",
  "window",
  "yawn"
];

// flipped class - prevent from choosing flipped cards
// data-matched - track which cards are matched to determine when game ends

form.addEventListener("submit", e => {
  e.preventDefault();

  if (usernameInput.value.length < 2) {
    // update error element
    console.log("Your name must be at least 2 characters.")
  } else {
    currentPlayer.textContent = `Now playing: ${usernameInput.value}`;
    form.style.display = "none";
    renderBoard();
  }
});

function renderBoard() {
  const cards = getShuffledPairs(cardImages);

  for (let i = 0; i < cards.length; i++) {

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("name", cards[i]);
    card.setAttribute("data-matched", false);

    card.innerHTML = `
        <img class="card__front" src="/images/dogs/${cards[i]}.jpg" alt="card front">
        <img class="card__back" src="/images/cover.jpg" alt="card back">
    `;

    setTimeout(() => {
      board.appendChild(card);  
    }, boardStagger * i);
  }

  // prevent player from clicking on card until all cards are rendered
  setTimeout(() => {
    board.addEventListener("click", e => {
      console.log(e.target.parentElement)
      if (e.target.classList.contains("card__back")) {
        handleClick(e.target.parentElement);
      }
    });
  }, boardStagger * cards.length);
}

function handleClick(card) {
  console.log(card.getAttribute("name"));
  card.classList.add("flipped");

  choiceOne ? choiceTwo = card : choiceOne = card;

  if (choiceOne && choiceTwo) {
    if (choiceOne.getAttribute("name") === choiceTwo.getAttribute("name")) {
      console.log("those cards match!");
      // set data-matched to true
      choiceOne.setAttribute("data-matched", true);
      choiceTwo.setAttribute("data-matched", true);
      choiceOne = null;
      choiceTwo = null;
    } else {
      console.log("those cards don't match");
      // removed the flipped class after a delay
      setTimeout(() => {
        choiceOne.classList.remove("flipped");
        choiceTwo.classList.remove("flipped");
        choiceOne = null;
        choiceTwo = null;
      }, 1000)
    }
  }
}


// Helper functions:

function getShuffledPairs(arr) {
  const shuffledArr = shuffle(arr);
  const slicedArr = shuffledArr.slice(0, 8);
  const pairedArr = [...slicedArr, ...slicedArr];
  const shuffledPairs = shuffle(pairedArr);
  return shuffledPairs;
}

function shuffle(arr) {
  const shuffledArr = arr.sort(() => Math.random() - 0.5);
  return shuffledArr;
}


// sandbox:

// const testCard = document.querySelector(".test-card");
// // console.log(testCard)
// testCard.addEventListener("click", e => {
//   console.log(e.target.parentElement);
//   e.target.parentElement.classList.toggle("flipped");
// })