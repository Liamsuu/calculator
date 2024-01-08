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
