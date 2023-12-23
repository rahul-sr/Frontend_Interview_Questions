function calculateVolume(l) {
  return function (b) {
    return function (h) {
      return l * b * h;
    };
  };
}
console.log(calculateVolume(4)(5)(6));

// function calculateVolume(l, b, h) {
//     return l * b * h;
//   }
// const calculateVolume = (l) => (b) => (h) => l * b * h;
