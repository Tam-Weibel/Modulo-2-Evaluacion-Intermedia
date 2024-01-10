"use strict";

const userOption = document.querySelector(".selector");
const btn = document.querySelector(".btn");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const result = document.querySelector(".play");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let random = getRandomNumber();

let computerOption = "";

function computerPlay() {
  if (random <= 3) {
    computerOption = "rock";
  } else if (random >= 7) {
    computerOption = "paper";
  } else {
    computerOption = "scissors";
  }
  console.log("the computer picked: " + computerOption);
}

function compare(computerOption, userOption) {
  if ((computerOption = "rock") && (userOption = "rock")) {
    result.innerHTML = "Empate.";
  } else if ((computerOption = "paper") && (userOption = "paper")) {
    result.innerHTML = "Empate";
  } else if ((computerOption = "scissors") && (userOption = "scissors")) {
    result.innerHTML = "Empate";
  } else if ((computerOption = "rock") && (userOption = "paper")) {
    result.innerHTML = "¡Has ganado!";
  } else if ((computerOption = "rock") && (userOption = "scissors")) {
    result.innerHTML = "¡Has perdido!";
  } else if ((computerOption = "paper") && (userOption = "rock")) {
    result.innerHTML = "¡Has perdido!";
  } else if ((computerOption = "paper") && (userOption = "scissors")) {
    result.innerHTML = "¡Has ganado!";
  } else if ((computerOption = "scissors") && (userOption = "rock")) {
    result.innerHTML = "¡Has ganado!";
  } else if ((computerOption = "scissors") && (userOption = "paper")) {
    result.innerHTML = "¡Has perdido!";
  }
}

function handleClick(event) {
  event.preventDefault();
  random = getRandomNumber(9);
  console.log("the number is: " + random);
  computerPlay();
  console.log("the user picked: " + userOption.value);
  compare(computerOption, userOption);
  return userOption;
}

btn.addEventListener("click", handleClick);
