1. ### String templating

   Template Literals use back-ticks (``) rather than the quotes ("") to define a string.
   Template literals provide an easy way to interpolate variables and expressions into strings using ${}.

2. ### Destructuring in Javascript

   Destructuring in Javascript makes it possible to unpack properties from objects and values from arrays into distinct variables.

3. ### What is the difference between == and === operators

   JavaScript provides both strict(===, !==) and non-strict(==, !=) equality comparison. Following are the special cases:

   1. NaN is not equal to anything, including NaN.
   2. Two objects are strictly equal if they refer to the same object.
   3. Null and Undefined types are not equal with === but equal with ==.

      - null===undefined --> false
      - null==undefined --> true

   Some of the example which covers the above cases:

   ```javascript
   0 == false   // true
   0 === false  // false
   1 == "1"     // true
   1 === "1"    // false
   null == undefined // true
   null === undefined // false
   '0' == false // true
   '0' === false // false
   []==[] or []===[] //false, refer different objects in memory
   {}=={} or {}==={} //false, refer different objects in memory
   ```

4. ### What are primitive data types

   A primitive data type is data that has a primitive value (which has no properties or methods). There are 7 types of primitive data types.

   1. string
   2. number
   3. boolean
   4. null
   5. undefined
   6. bigint
   7. symbol

   In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).
   With this standard, large integer cannot be exactly represented and will be rounded.
   Because of this, JavaScript can only safely represent integers:
   Up to 9007199254740991 and Down to -9007199254740991.
   Integer values outside this range lose precision.

   ***

   Objects are Non-primitive Data Types.

5. ### What is Hoisting

   Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.
   JavaScript only hoists declarations, not initialisation.
   In the same fashion, function declarations are hoisted too.

   Whenever we execute JavaScript code, it creates a Global Execution Context The global execution context has two phases.

   1. Creation Phase:
      If there are any variables declared in the code, the memory gets allocated for the variable. The variable gets initialized with a unique value called undefined. If there is a function in the code, it gets placed directly into the memory.

   2. Execution Phase:
      The code execution starts in this phase. Here, the value assignment of the global variables takes place.

6. ### What is the difference between var, let and const

   - var declarations are globally scoped or function scoped while let and const are block scoped.
   - var variables can be updated and re-declared within its scope
   - let variables can be updated but not re-declared
   - const variables can neither be updated nor re-declared.

   - They are all hoisted to the top of their scope.
     But while var variables are initialized with undefined.
     let and const variables are not initialized.
   - While var and let can be declared without being initialized, const must be initialized during declaration.

7. ### What is the Temporal Dead Zone

   The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var.

   In ECMAScript 6, accessing a `let` or `const` variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

8. ### Normal function vs Arrow function

   In normal functions, a this variable is created which references the objects that call them.
   In arrow function, this variable is not created.
   this is always global "this" regardless of strictness.

   Furthermore, when invoking arrow functions using call(), bind(), or apply(), the this arg parameter is ignored.

9. ### What is the difference between Call, Apply and Bind?

   **Call:** The call() method invokes a function with a given `this` value and arguments provided one by one.

   **Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

   **Bind:** returns a new function, allowing you to pass any number of arguments

   ***

   Call and Apply are pretty much interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**.

   Bind creates a new function that will have `this` set to the first parameter passed to bind().

10. ### What are classes in ES6?

    In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.

11. ### What is Prototypes in Javascript?

    - Prototypes are the mechanism by which JavaScript objects inherit features from one another.
    - Prototype chaining is used to build new types of objects based on existing ones.
    - It is similar to inheritance in a class based language.
    - The prototype on object instance is available through
      Object.getPrototypeOf(object) or **proto** property

12. ### Error handling in Javascript

    Below are the list of statements used in an error handling:

    - try: This statement is used to test a block of code for errors
    - catch: This statement is used to handle the error
    - throw: This statement is used to create custom errors.
    - finally: This statement is used to execute code after try and catch regardless of the result.

13. ### What are closures?

    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

    In other words, a closure gives you access to an outer function's scope from an inner function.
    The closure has three scope chains:

    - Own scope where variables defined between its curly brackets
    - Outer function’s variables
    - Global variables

14. ### What is function currying?

    Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

    Currying is named after a mathematician Haskell Curry.
    By applying currying, an n-ary function turns into a unary function.

15. ### What is a callback function?

    A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.

    A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed.
