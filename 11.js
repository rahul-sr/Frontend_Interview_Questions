const obj = {
  name: "foo",
  f1: function () {
    console.log(this);
  },
  f2: () => {
    console.log(this);
  },
};

obj.f1();
obj.f2();
