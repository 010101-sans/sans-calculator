// Select all buttons on the page
const buttons = document.querySelectorAll("button");

// Select the screen element to display the calculation results
const screen =  document.querySelector(".screen");

// Initialize the current input, previous input and current operator
let currentInput    = "0";
let previousInput   = "0";
let currentOperator = "";

// Loop through each button and add an event listener to listen to clicks
buttons.forEach((button) => {

  button.addEventListener("click", (e) => {

    // Get the value of the clicked button
    const value = e.target.innerText;

    // Return if the clicked button is "AC" or "ON/OFF"
    if (value === "AC" || value === "ON/OFF") { return; }

    // Set the previous input, current operator and current input if the clicked button is an operator
    if (value === "+"|| value === "-"|| value === "*"|| value === "/"|| value === "%"|| value === "^2") {

      previousInput = currentInput;
      currentOperator = value;
      currentInput = "0";

    } else if (value === "=") {   // Perform the respective operation if the "=" is clicked
      
      // parseFloat() : to parse a string (present on screen) and return a floating point number

      switch (currentOperator) {
        case "+"  : currentInput = parseFloat(previousInput) + parseFloat(currentInput);                break;
        case "-"  : currentInput = parseFloat(previousInput) - parseFloat(currentInput);                break;
        case "*"  : currentInput = parseFloat(previousInput) * parseFloat(currentInput);                break;
        case "/"  : currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toFixed(2);   break;
        case "%"  : currentInput = parseFloat(previousInput) % parseFloat(currentInput);                break;
        case "^2" : currentInput = Math.pow(parseFloat(previousInput), 2).toFixed(2);                   break;
      }
      // Reset the previous input and current operator after performing the operation
      previousInput = "0";
      currentOperator = "";
      
    } else {   // Concatenate the current input if the clicked button is a number

      if (currentInput === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    // To adjust the font-size of text within screen according to length of on-screen number
    if (currentInput.length > 16) {
      document.querySelector(".screen").style.fontSize = "28px";
    }
    else if (currentInput.length > 14) {
      document.querySelector(".screen").style.fontSize = "30px";
    } else if (currentInput.length > 10) {
      document.querySelector(".screen").style.fontSize = "40px";
    }

    // To update the screen-text with updated result
    screen.innerText = currentInput;

  });
});

// Select the "AC" (All Clear) button
const acBtn = document.querySelector("#ac");
// Add event listener for "AC" button
acBtn.addEventListener("click", function () {
  // Reset the calculator to default values
  currentInput = "0";
  previousInput = "0";
  currentOperator = "";
  screen.innerText = currentInput;
  document.querySelector(".screen").style.fontSize = "60px"; 
});


// Add event listener for "ON/OFF" button 
document.getElementById("onoff").addEventListener("click", function () {

  // If the background color of calculator screen is white, change it to black and vice versa
  if (document.querySelector(".screen").style.backgroundColor === "white") {
    document.querySelector(".screen").style.backgroundColor = "black";
  } else {
    document.querySelector(".screen").style.backgroundColor = "white";
  }
  // Reset the calculator to default values
  currentInput = "0";
  previousInput = "0";
  currentOperator = "";
  document.querySelector(".screen").style.fontSize = "60px";
  // Update the calculator screen with the reset value
  screen.innerText = currentInput;
});
