const buttons = document.querySelectorAll("button");
const screen =  document.querySelector(".screen");

let currentInput    = "0";
let previousInput   = "0";
let currentOperator = "";

buttons.forEach((button) => {

  button.addEventListener("click", (e) => {

    const value = e.target.innerText;

    if (value === "AC" || value === "ON/OFF") { return; }

    if (value==="+"||value==="-"||value==="*"||value==="/"||value==="%"||value==="^2") {

      previousInput = currentInput;
      currentOperator = value;
      currentInput = "0";

    } else if (value === "=") {
      
      
      switch (currentOperator) {
        case "+"  : currentInput = parseFloat(previousInput) + parseFloat(currentInput);                break;
        case "-"  : currentInput = parseFloat(previousInput) - parseFloat(currentInput);                break;
        case "*"  : currentInput = parseFloat(previousInput) * parseFloat(currentInput);                break;
        case "/"  : currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toFixed(2);   break;
        case "%"  : currentInput = parseFloat(previousInput) % parseFloat(currentInput);                break;
        case "^2" : currentInput = Math.pow(parseFloat(previousInput), 2).toFixed(2);                              break;
      }
      if (currentInput.length > 14) {
        document.querySelector(".screen").style.fontSize = "30px";
      }
      else if (currentInput.length > 10) {
        document.querySelector(".screen").style.fontSize = "40px";
      }
      previousInput = "0";
      currentOperator = "";

    } else {

      if (currentInput === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    screen.innerText = currentInput;

  });
});


// To add the functionality of "AC" (All Clear)
const acBtn = document.querySelector("#ac");
const calculator = document.querySelector(".calculator");

acBtn.addEventListener("click", function () {
  currentInput = "0";
  previousInput = "0";
  currentOperator = "";
  screen.innerText = currentInput;
  document.querySelector(".screen").style.fontSize = "60px";
});


// To add the functionality of turning calculator "ON/OFF"
document.getElementById("onoff").addEventListener("click", function () {
  if (document.querySelector(".screen").style.backgroundColor === "white") {
    document.querySelector(".screen").style.backgroundColor = "black";
  } else {
    document.querySelector(".screen").style.backgroundColor = "white";
  }
  currentInput = "0";
  previousInput = "0";
  currentOperator = "";
  document.querySelector(".screen").style.fontSize = "60px";
  screen.innerText = currentInput;
});
