try {
  nonExistentMethod();
} catch (error) {
  console.log("Catch block");
}

// try {
//   throw Error("This is an Error");
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Finally block");
// }
