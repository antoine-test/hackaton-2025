// "Array-mutating methods should not be used misleadingly"
const arr1 = [1, 2, 3];
const arr2 = arr1.reverse();

// "Array.prototype.sort() and Array.prototype.toSorted() should use a compare function"
const arr3 = [1, 10, 2];
arr3.sort();

// "Non-existent operators =+, =- and =!"
let x = 1;
x =+ 2;

// "NaN should not be used in comparisons"
if (x === NaN) {
  console.log("x is NaN");
}

// "Wrapper objects should not be used for primitive types"
let y = new Number("0");

// "Array constructors should not be used"
const arr4 = new Array(1, 2, 3);

// "Statements should end with semicolons"
var z = 1;;
function foo() { };

// "switch statements should have default clauses"
const myVar = 1;
switch (myVar) {
  case 1:
    console.log("1");
    break;
}

// "Jump statements should not be redundant"
function redundantJump(x) {
  if (x == 1) {
    console.log("x == 1");
    return;
  }
}

// "The base should be provided to parseInt"
parseInt("010");

// "Unchanged variables should be marked as const"
let a = 1;
console.log(a);

// "Variables should be declared with let or const"
var b = 2;

// "Regular expressions should not contain multiple spaces"
const regex = /Hello,   world!/;

// "If statements should not be the only statement in else blocks"
if (a > 1) {
    console.log("a is greater than 1");
} else {
    if (a < 1) {
        console.log("a is less than 1");
    }
}

// "Unnecessary constructors should be removed"
class MyClass {
    constructor() {
    }
}

// "Variables should not be initialized to undefined"
let myUndefined;

// "Ternary operator should not be used instead of simpler alternatives"
const myBoolean = a > 1 ? true : false;

// "Extra boolean casts should be removed"
const anotherBoolean = !!(a > 1);

// "Literals should not be thrown"
throw "error";

// "Template strings should be used instead of concatenation"
const myString = "a is " + a;

// "The global this object should not be used"
console.log(this);

// "All code should be reachable"
function unreachable() {
    return;
    console.log("unreachable");
}

// "Member names should not be duplicated within a class or object literal"
const myObject = {
    prop: 1,
    prop: 2
};

// "Local variables should not be declared and then immediately returned or thrown"
function immediateReturn() {
    const a = 1;
    return a;
}


