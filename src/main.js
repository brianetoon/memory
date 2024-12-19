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
    // const cardImg 
    card.classList.add("card");
    card.style.backgroundImage = `url("/images/dogs/${cards[i]}.jpg")`;
    card.setAttribute("name", cards[i]);

    setTimeout(() => {
      board.appendChild(card);  
    }, boardStagger * i);
  }

  // prevent player from clicking on card until all cards are rendered
  setTimeout(() => {
    board.addEventListener("click", e => {
      if (e.target.classList.contains("card")) {
        handleClick(e.target);
      }
    });
  }, boardStagger * cards.length);
}

function handleClick(card) {
  console.log(card.getAttribute("name"));

  choiceOne ? choiceTwo = card : choiceOne = card;

  if (choiceOne && choiceTwo) {
    if (choiceOne.getAttribute("name") === choiceTwo.getAttribute("name")) {
      console.log("those cards match!")
    } else {
      console.log("those cards don't match")
    }
    choiceOne = null;
    choiceTwo = null;
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

// console.log(getShuffledPairs(cardImages));
