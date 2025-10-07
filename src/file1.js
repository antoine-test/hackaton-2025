// RSPEC-7060
import file1 from './file1'; // Noncompliant
const file1 = require('./file1'); // Noncompliant

// RSPEC-6859
import { file1 } from '/Users/antoinevigneau/Documents/Experiments/hackaton-2025/src/file1.js';

// RSPEC-6749
function Fragment() {
  return (
    <><Foo /></>;    // Noncompliant: The fragment has only one child
    <p><>foo</></p>; // Noncompliant: The fragment is the child of the HTML element 'p'
  );
}

// RSPEC-6747
class Welcome extends React.Component {
  render() {
    return <div class="hello">Hello, World!</div>; // Noncompliant: 'class' is a reserved keyword in JavaScript
  }
}

// RSPEC-6679
if (value !== value){ // Noncompliant: use Number.isNaN()
    processNaN(value);
}

// RSPEC-6676
let obj = {
    checkThis() {
        this === obj; // true, if called the normal way: obj.checkThis()
    }
};

let otherObject = {};

obj.checkThis.call(otherObject); // this === otherObject, if called this way

// RSPEC-6666
foo.apply(undefined, args); // Noncompliant: use spread syntax instead of .apply()
foo.apply(null, args); // Noncompliant: use spread syntax instead of .apply()
obj.foo.apply(obj, args); // Noncompliant: use spread syntax instead of .apply()

// RSPEC-6661
const a = Object.assign({}, foo); // Noncompliant: Use spread syntax to clone or merge objects
const b = Object.assign({}, foo, bar); // Noncompliant: Use spread syntax to clone or merge objects
const c = Object.assign({foo: 123}, bar); // Noncompliant: Use spread syntax to clone or merge objects
const d = Object.assign({}); // Noncompliant: Use spread syntax to clone or merge objects

// RSPEC-6660 
if (condition1) {
    // ...
} else {
    if (condition2) {  // Noncompliant: 'if' statement is the only statement in the 'else' block
        // ...
    }
}

