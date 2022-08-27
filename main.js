let title = document.querySelector('.title');
let turn = "X";
let square = [];

function game(id) {
  let ele = document.getElementById(id);
  if (turn === "X" && ele.innerHTML == "") {
    ele.innerHTML = "X";
    turn = "O";
    title.innerHTML = "O";
  } else if (turn === "O" && ele.innerHTML == "") {
    ele.innerHTML = "O";
    turn = "X";
    title.innerHTML = "X";
  }
  winner();
}

function winner() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById("item" + i).innerHTML;
  }

  if (square[1] == square[2] && square[2] == square[3] && square[1] !== "") {
    check(1, 2, 3);
  } else if (
    square[4] == square[5] &&
    square[5] == square[6] &&
    square[4] !== ""
  ) {
    check(4, 5, 6);
  } else if (
    square[7] == square[8] &&
    square[8] == square[9] &&
    square[7] !== ""
  ) {
    check(7, 8, 9);
  } else if (
    square[1] == square[4] &&
    square[4] == square[7] &&
    square[1] !== ""
  ) {
    check(1, 4, 7);
  } else if (
    square[2] == square[5] &&
    square[5] == square[8] &&
    square[2] !== ""
  ) {
    check(2, 5, 8);
  } else if (
    square[3] == square[6] &&
    square[6] == square[9] &&
    square[3] !== ""
  ) {
    check(3, 6, 9);
  } else if (
    square[1] == square[5] &&
    square[5] == square[9] &&
    square[1] !== ""
  ) {
    check(1, 5, 9);
  } else if (
    square[3] == square[5] &&
    square[5] == square[7] &&
    square[3] !== ""
  ) {
    check(3, 5, 7);
  } else if (
    (square[1] == "X" || square[1] == "O") &&
    (square[2] == "X" || square[2] == "O") &&
    (square[3] == "X" || square[3] == "O") &&
    (square[4] == "X" || square[4] == "O") &&
    (square[5] == "X" || square[5] == "O") &&
    (square[6] == "X" || square[6] == "O") &&
    (square[7] == "X" || square[7] == "O") &&
    (square[8] == "X" || square[8] == "O") &&
    (square[9] == "X" || square[9] == "O")
  ) {
    document.querySelector(".title").innerHTML = "It's a Tie";
    setInterval(() => (title.innerHTML += "."), 1000);
    setTimeout(() => location.reload(), 4000);
  }
}

function check(num1, num2, num3) {
    title.innerHTML = `Player ${square[num1]} Winner`;
  document.getElementById("item" + num1).style.background = "#000";
  document.getElementById("item" + num2).style.background = "#000";
  document.getElementById("item" + num3).style.background = "#000";

  setInterval(() => (title.innerHTML += "."), 1000);
  setTimeout(() => location.reload(), 4000);
}