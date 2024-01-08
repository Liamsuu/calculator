// object just holds all the functionality.
const calcFunction = {
  add: (...params) => {
    let sum = 0;
    params.forEach((number) => {
      sum += number;
    });
    return sum;
  },
};
