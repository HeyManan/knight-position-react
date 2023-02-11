const isValid = (x, y) => {
  return x >= 1 && y >= 1 && x <= 8 && y <= 8;
};

export const logic = (x, y) => {
  let result = [];

  let steps = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
  ];

  for (let i = 0; i < steps.length; i++) {
    if (isValid(x + steps[i][0], y + steps[i][1])) {
      result.push([x + steps[i][0], y + steps[i][1]]);
    }
  }

  return result;
};
