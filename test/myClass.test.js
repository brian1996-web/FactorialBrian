const MyClass = require("../src/myClass.js");

const myObj = new MyClass();

var chai = require("chai");
// const { assert } = require('chai');

var assert = chai.assert;

describe("Factorial method", function () {
  it("Test the multiplication method", function () {
  

    assert.equal(myObj.factorial(0), 1);
  });
  it("Test the factorial method", function () {
    assert.equal(myObj.factorial(2), 2);
  });

  // incase you use -1 ,it will constanly call on the function of factorial,
  //  though no feedback because factorial does not work with negative numbers
  it("Test the factorial method", function () {
    assert.equal(myObj.factorial(3), 6);
  });
 
});
