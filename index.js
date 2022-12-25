const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let btn1El = document.querySelector("#btn1-el");
let btn2El = document.querySelector("#btn2-el");

let pass1 = [];
let pass2 = [];

document.getElementById("btn").addEventListener("click", function () {
  for (let i = 0; i < 15; i++) {
    let randomP1 = characters[Math.floor(Math.random() * characters.length)];
    let randomP2 = characters[Math.floor(Math.random() * characters.length)];
    pass1.push(randomP1);
    btn1El.textContent = pass1.join("");
    pass2.push(randomP2);
    btn2El.textContent = pass2.join("");
  }
  generateNextSet();
});

function generateNextSet() {
  pass1 = [];
  pass2 = [];
}
