function rockPaperScissor(player1, player2) {
  if (player1 == "rock" && player2 == "rock") {
    return (
      "Player 1 = " + player1 + "\nPlayer 2 = " + player2 + "\nresult = Draw!"
    );
  } else if (player1 == "paper" && player2 == "paper") {
    return (
      "Player 1 = " + player1 + "\nPlayer 2 = " + player2 + "\nresult = Draw!"
    );
  } else if (player1 == "scissor" && player2 == "scissor") {
    return (
      "Player 1 = " + player1 + "\nPlayer 2 = " + player2 + "\nresult = Draw!"
    );
  } else if (player1 == "rock" && player2 == "paper") {
    return (
      "Player 1 = " +
      player1 +
      "\nPlayer 2 = " +
      player2 +
      "\nresult = Player 2 Won!"
    );
  } else if (player1 == "scissor" && player2 == "rock") {
    return (
      "Player 1 = " +
      player1 +
      "\nPlayer 2 = " +
      player2 +
      "\nresult = Player 2 Won!"
    );
  } else if (player1 == "paper" && player2 == "scissor") {
    return (
      "Player 1 = " +
      player1 +
      "\nPlayer 2 = " +
      player2 +
      "\nresult = Player 2 Won!"
    );
  } else if (player1 == "scissor" && player2 == "paper") {
    return (
      "Player 1 = " +
      player1 +
      "\nPlayer 2 = " +
      player2 +
      "\nresult = Player 1 Won!"
    );
  } else if (player1 == "paper" && player2 == "rock") {
    return (
      "Player 1 = " +
      player1 +
      "\nPlayer 2 = " +
      player2 +
      "\nresult = Player 1 Won!"
    );
  } else if (player1 == "rock" && player2 == "scissor") {
    return (
      "Player 1 = " +
      player1 +
      "\nPlayer 2 = " +
      player2 +
      "\nresult = Player 1 Won!"
    );
  }
  // TODO: replace this
}

console.log(rockPaperScissor("scissor", "paper")); // "Player 1 Won!"
console.log(rockPaperScissor("rock", "paper")); // "Player 2 Won!"
console.log(rockPaperScissor("paper", "paper")); // "Draw!"
console.log(rockPaperScissor("rock", "rock")); // "Draw!"

module.exports = rockPaperScissor;
