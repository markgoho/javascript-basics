const square = function(x) {
  return x * x;
};

const simpleSquare = x => x * x;

const makeNoise = () => console.log('Pling!');
makeNoise();

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
