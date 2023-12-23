var employee1 = { firstName: "John" };

function f1(greeting, message) {
  console.log(greeting + " " + this.firstName);
  console.log(this.firstName + ", " + message);
}

f1("Hi", "How are you");
// f1.call(employee1, "Hi", "How are you");
// f1.apply(employee1, ["Hi", "How are you"]);
// f1.bind(employee1, "Hi");
