const score = document.getElementById("score");
const dice = document.getElementById("dice");
const button = document.getElementById("roll");
const player = document.getElementById("player");

button.addEventListener("click", () => {
    if (button.innerHTML == "Play Again?") {
        button.innerHTML = "roll";
        player.innerHTML = "Player 1";
        score.innerHTML = 0;
    }
    let x = Math.floor(Math.random() * 6) + 1;
    let y = parseInt(score.innerHTML);
    dice.src = `./dice${x}.png`;
    
    if (x === 1) {
        player.innerHTML = "You Lose!";
        button.innerHTML = "Play Again?";
    }
    else if (score.innerHTML < 20) {
        y += x;
        score.innerHTML = y
    }
    else if (y >= 20) {
        player.innerHTML = "You Win!";
        button.innerHTML = "Play Again?";
    }
}) 