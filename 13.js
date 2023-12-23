class Car1 {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  showInfo() {
    console.log(`Its a ${this.model} of ${this.color} color`);
  }
}

function Car2(model, color) {
  this.model = model;
  this.color = color;
}

Car2.prototype.showInfo = function () {
  console.log(`Its a ${this.model} of ${this.color} color`);
};

const car1 = new Car1("Mercedes", "Black");
const car2 = new Car2("Mercedes", "Black");

console.log(car1);
console.log(car2);
