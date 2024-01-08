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
  createButtons: () => {
    const container = document.querySelector(".main-container");
    for (let x = 0; x !== 10; x++) {
      const buttons = document.createElement("button");
      buttons.className = "buttons";
      buttons.textContent = `${x}`;
      container.appendChild(buttons);
    }
  },
};

calcFunction.createButtons();
console.log(calcFunction.subtract(10, 4));
console.log(calcFunction.add(10, 4));
console.log(calcFunction.multiply(10, 4));
console.log(calcFunction.divide(10, 4));
