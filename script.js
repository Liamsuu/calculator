const calcFunction = {
  // these methods may become redundant in the future.
  add: (...params) => {
    let sum = 0;
    params.forEach((number) => {
      sum += number;
    });
    return sum;
  },

  subtract: (...params) => {
    let sum;
    params.forEach((number, index) => {
      if (index === 0) {
        sum = params[index];
      } else {
        sum -= number;
      }
    });
    return sum;
  },

  multiply: (...params) => {
    let sum;
    params.forEach((number, index) => {
      if (index === 0) {
        sum = params[index];
      } else {
        sum *= number;
      }
    });
    return sum;
  },

  divide: (...params) => {
    let sum = params;
    params.forEach((number, index) => {
      if (index === 0) {
        sum = params[index];
      } else {
        sum /= number;
      }
    });
    return sum;
  },

  /* perhaps for this createButtons function I should make it like a grid with 3 buttons 
  on each div row like in the etch a sketch program, look at the program on how to do tomorrow */

  createButtons: () => {
    const container = document.querySelector("#buttons-container");
    for (let x = 0; x !== 10; x++) {
      const buttons = document.createElement("button");
      buttons.className = "buttons";
      buttons.textContent = `${x}`;
      container.appendChild(buttons);
    }
  },

  operate: (oper, num1, num2) => {
    switch (oper) {
      case "/":
        return calcFunction.divide(num1, num2);

      case "+":
        return calcFunction.add(num1, num2);
      case "-":
        return calcFunction.subtract(num1, num2);

      case "*":
        return calcFunction.multiply(num1, num2);

      default:
        return "ERROR";
    }
  },
};

const otherFunctionality = {
  /* simply used to check if operator last in displays text to prevent multiple operators straight
  just loop through nodelist(buttons) and each button from that will be passed through this when
  clicked. */
  updateDisplayText: (button) => {
    const display = document.querySelector("#display");
    const displayTextLength = display.textContent.length;

    switch (display.textContent.charAt(displayTextLength - 1)) {
      case "-":
        break;
      case "*":
        break;
      case "/":
        break;
      case "+":
        break;
      default:
        return (display.textContent += button.textContent);
    }
  },

  updateTextVar: (text) => {
    return (operatorInUse += text);
  },
};

// MAIN CODE

calcFunction.createButtons();
const buttons = document.querySelectorAll(".buttons");
const outerButtons = document.querySelectorAll(".outer-buttons");
const display = document.querySelector("#display");
let firstNum = "";
let operatorInUse = ""; // just what operator is used like + - * /, etc.
let secondNum = ""; // these numbers will be turned into numbers.

const equalsButton = document.querySelector("#result-button");
const resetButton = document.querySelector("#clear-button");

// just updates the ui text and takes note of operators in use
outerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let operatorUsed = false;

    for (let x = 0; x < display.textContent.length; x++) {
      if (
        display.textContent.charAt(x) == "+" ||
        display.textContent.charAt(x) == "*" ||
        display.textContent.charAt(x) == "-" ||
        display.textContent.charAt(x) == "/"
      ) {
        operatorUsed = true;
      }
    }
    if (operatorUsed == false) {
      otherFunctionality.updateTextVar(button.textContent);
      otherFunctionality.updateDisplayText(button);
    }

    console.log(operatorInUse);
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
    // check if operator is used, if not then append this string to firstNum(will convert to number)
    // else append to second Num
    let operatorUsed = false;
    for (let x = 0; x < display.textContent.length; x++) {
      if (
        display.textContent.charAt(x) == "+" ||
        display.textContent.charAt(x) == "*" ||
        display.textContent.charAt(x) == "-" ||
        display.textContent.charAt(x) == "/"
      ) {
        operatorUsed = true;
      }
    }
    if (operatorUsed === false) {
      firstNum += button.textContent;
    } else {
      secondNum += button.textContent;
    }

    console.log("first number: " + " " + firstNum);
    console.log("second number: " + " " + secondNum);
  });
});

equalsButton.addEventListener("click", () => {
  answer = calcFunction.operate(operatorInUse, firstNum, secondNum);
  display.textContent = answer;
  firstNum = display.textContent;
  secondNum = "";
  operatorInUse = "";
});

resetButton.addEventListener("click", () => {
  display.textContent = "";
  firstNum = "";
  secondNum = "";
  operatorInUse = "";
});

// UPDATE IT SO IT CAN TAKE MINUS NUMBERS AND CHANGE IT SO IT CONVERTS TO NUMBER RATHER THAN PASSING
// THE OPERATE FUNCTION A STRING.
