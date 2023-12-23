function counter() {
  let count = 0;
  return function (val) {
    count = count + val;
    return count;
  };
}

let changeCounter = counter();
console.log(changeCounter(1));
console.log(changeCounter(1));
console.log(changeCounter(1));
console.log(changeCounter(-1));
