class MyClass {
  constructor() {
    console.log("initiate");
  }

  factorial(n) {
    if (n === 0) {
      return 1; // Base case: 0! is defined as 1
    } else {
      return n * this.factorial(n - 1); // Recursive case: n! = n * (n-1)!
    }
  }
}

module.exports = MyClass;
