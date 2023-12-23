class Vehicle {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  showInfo() {
    console.log(`Its a ${this.type} of ${this.color} color`);
  }
}

class Car extends Vehicle {
  constructor(color, model) {
    super("car", color);
    this.model = model;
  }

  start() {
    console.log(`Starting the ${this.model} car!`);
  }
}

const car1 = new Car("black", "Mercedes");
car1.showInfo();
car1.start();
