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
    if (params[0] === 0 || params[1] === 0) {
      return "You tried, you failed. You know what you did.";
    }
    params.forEach((number, index) => {
      if (index === 0) {
        sum = params[index];
      } else {
        sum /= number;
      }
    });
    return Math.round(sum * 100) / 100;
  },

  /* perhaps for this createButtons function I should make it like a grid with 3 buttons 
  on each div row like in the etch a sketch program, look at the program on how to do tomorrow */

  createButtons: () => {
    const container = document.querySelector("#buttons-container");
    const segment1 = container.querySelector("#segment1");
    const segment2 = container.querySelector("#segment2");
    const segment3 = container.querySelector("#segment3");
    const segment4 = container.querySelector("#segment4");

    for (let x = 0; x !== 10; x++) {
      const buttons = document.createElement("button");
      buttons.className = "buttons";
      buttons.textContent = `${x}`;
      if (x === 0) {
        segment4.appendChild(buttons);
      } else if (x > 0 && x < 4) {
        segment1.appendChild(buttons);
      } else if (x > 3 && x < 7) {
        segment2.appendChild(buttons);
      } else {
        segment3.appendChild(buttons);
      }
    }
  },

  operate: (oper, num1, num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
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
let operatorInUse = ""; // just what operator is used like + - * /, etc.x
let secondNum = ""; // these string numbers will be turned into real numbers using operate()

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

// UPDATE IT SO IT CAN TAKE MINUS NUMBERS
