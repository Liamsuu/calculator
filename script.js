// object just holds all the functionality.
// might need to change so that it takes an array of the previously typed stuff and only minus
// the number that follows with event listener.
const calcFunction = {
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
};

const otherFunctionality = {
  // update so operators cannot be appended one after another such as "+-" only allowing a num after
  displayTextUpdater: (nodelist) => {
    nodelist.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonNumber = button.textContent;
        display.textContent += buttonNumber;
      });
    });
  },
};

// example testing below
let firstNum = 1;
let secondNum = 4;
let operator = "-";

console.log(calcFunction.operate(operator, firstNum, secondNum));
calcFunction.createButtons();
const buttons = document.querySelectorAll(".buttons");
const outerButtons = document.querySelectorAll(".outer-buttons");
const display = document.querySelector("#display");
let displayText;

otherFunctionality.displayTextUpdater(buttons);
otherFunctionality.displayTextUpdater(outerButtons);
