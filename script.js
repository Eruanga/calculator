let themeCounter = 0;

toggleTheme = () => {
  const body = document.body;
  themeCounter = (themeCounter + 1) % 3;

  if (themeCounter === 0) {
    body.classList.remove("second-theme", "third-theme");
  } else if (themeCounter === 1) {
    body.classList.remove("third-theme");
    body.classList.add("second-theme");
  } else {
    body.classList.remove("second-theme");
    body.classList.add("third-theme");
  }
};

let expression = "";
let isResultDisplayed = false;

function buttonClick(event) {
  const buttonValue = event.target.innerText;

  if (buttonValue === "=") {
    evaluateExpression();
  } else if (buttonValue === "Del") {
    backspace();
  } else if (buttonValue === "RESET") {
    clearDisplay();
    isResultDisplayed = false;
  } else {
    if (isResultDisplayed) {
      clearDisplay();
      isResultDisplayed = false;
      let expression = "0";
    }

    if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "*" ||
      buttonValue === "/"
    ) {
      // Handle operator buttons to avoid duplicate entries
      if (!expression.endsWith(buttonValue)) {
        expression += buttonValue;
      }
    } else {
      expression += buttonValue;
    }

    updateDisplay();
  }
}

function clearDisplay() {
  expression = "";
  isResultDisplayed = false;
  document.getElementById("cal-display").innerText = "0";
}
function backspace() {
  expression = expression.slice(0, -1);
  updateDisplay();
}
function evaluateExpression() {
  try {
    const result = eval(expression);
    expression = result.toString();
    isResultDisplayed = true;
    updateDisplay();
  } catch (error) {
    expression = "Error try again";
    updateDisplay();
  }
}
function appendOperator(operator) {
  if (isResultDisplayed) {
    clearDisplay();
    isResultDisplayed = false;
  }
  expression += operator;
  updateDisplay();
}
function updateDisplay() {
  document.getElementById("cal-display").innerText = expression;
}

if (document.getElementById("cal-display" === null)) {
}

// function buttonClick(event) {
//   const buttonValue = event.target.innerText;

//   if (buttonValue === "=") {
//     evaluateExpression();
//   } else {
//     if (isResultDisplayed) {
//       clearDisplay();
//       isResultDisplayed = false;
//     }

//     expression += buttonValue;
//     updateDisplay();
//   }
// }

// function clearDisplay() {
//   expression = "";
//   updateDisplay();
// }

// function backspace() {
//   expression = expression.slice(0, -1);
//   updateDisplay();
// }

// function evaluateExpression() {
//   try {
//     const result = eval(expression);
//     expression = result.toString();
//     isResultDisplayed = true;
//     updateDisplay();
//   } catch (error) {
//     expression = "Error";
//     updateDisplay();
//   }
// }

// function updateDisplay() {
//   document.getElementById("display").innerText = expression;
// }
