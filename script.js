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

      case "+":
        return calcFunction.multiply(num1, num2);

      default:
        return "ERROR";
    }
  },

  // create calculate function that simply grabs display text and turns it into numbers to calculate
  // then replace text content with that.

  textCalculate: (text) => {
    // perhaps turn to array. go through each and evaluate using bidmas
    // so for divide it will grab both left and right side numbers and divide them and store result
    // to work on the rest.
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
    return (displayText += text);
  },
};

// example testing below

calcFunction.createButtons();
const buttons = document.querySelectorAll(".buttons");
const outerButtons = document.querySelectorAll(".outer-buttons");
const display = document.querySelector("#display");
let displayText = "";

// it must check result of display text updater return value first otherwise the display will not
// update with too many operators, but the var will which is not what is wanted.
outerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (otherFunctionality.updateDisplayText(button) !== undefined) {
      otherFunctionality.updateTextVar(button.textContent);
      otherFunctionality.updateDisplayText(button);
    }
    // log is just a test
    console.log(displayText);
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
    displayText += button.textContent;
    console.log(displayText);
  });
});
// for now, just change it so it can only allow two numbers at once rather than long expressions.
