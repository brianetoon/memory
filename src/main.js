const board = document.getElementById("board");
const form = document.querySelector(".user-form");
const currentPlayer = document.querySelector(".user-form");
const usernameInput = form.firstElementChild;
const boardStagger = 75;

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
    renderBoard();
  }
});

function renderBoard() {
  // call function to return randomized array of the 8 image pairs
  const cards = getShuffledPairs(cardImages);

  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("div");
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
}

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
