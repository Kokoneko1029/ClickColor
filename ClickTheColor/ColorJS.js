let colorsArray = ["Red", "Blue", "Yellow", "Green"];
let scoreCount = 0;

let isGame = false;

let colorEl = document.getElementById("color-el");
let scoreEl = document.getElementById("score-el");

function randColor() {
  let colorIndex = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[colorIndex];
}

function startGame() {
  isGame = true;
  updateColor();
  scoreCount = 0;
  scoreEl.textContent = "Score: " + scoreCount;
}

function updateColor() {
  let correctColor = randColor();
  let textColor = randColor();
  do {
    textColor = randColor();
  } while (textColor === correctColor);

  colorEl.innerText = correctColor;
  colorEl.style.color = textColor;
}

function updateScore() {
  scoreCount++;
  scoreEl.textContent = "Score: " + scoreCount;
}

function checkColor(guessColor) {
  if (isGame) {
    let correctColor = colorEl.innerText;
    if (guessColor === correctColor) {
      updateScore();
      updateColor();
    } else {
      alert((colorEl.innerText = "Wrong!"));
      isGame = false;
    }
  }
}
