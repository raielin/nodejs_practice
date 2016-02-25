// Create undefined variable.
var name = undefined;

// 'undefined' just like 'true' and 'false' is a reserved keyword. Can be used anywhere you can use another variable. Can use it as an argument in a function.

console.log(name);

// 'undefined' is also the default value for uninitialized variables. Variables that are declared but have yet to be assigned a value.

var emptyName;
console.log(emptyName);

// So if there's a situation where an argument for a function is optional or some variable may or may not exist, you want to check if that variable is undefined.

name = 'Andrew'; // Gives variable name a value of string 'Andrew'.
console.log(name);
name = undefined; // resets variable as if it had no value to begin with.
console.log(name);


// 'undefined' also comes up elsewhere, like in functions.
function doesNothing() {

}

console.log(doesNothing());

// doesNothing() has no explicit 'return', so 'undefined' gets returned.

// 'undefined' is also used in function arguments.
function doesNothing2(age) {
  console.log(age);
}

doesNothing2();

// If function requires an argument but you call the function without supplying the argument, the argument is automatically set to undefined within the function.

// 'undefined' is go-to in showing when a variable doesn't exist, an argument doesn't exist, a function returned nothing.

console.log('\n\'undefined\' in IF statements:\n');

// Can also use 'undefined' inside an IF statement
var meToo = undefined;

// Checking if a variable is undefined
if (meToo === undefined) {
  console.log('meToo is undefined');
}

// This isn't the best method, though, because...
// if (x === undefined) {
//  console.log('x is undefined');
// }
// Get a 'ReferenceError', saying x was never initialized or created. So can really only use this method if you know for sure a variable exists. Otherwse, usually better to use 'typeof'.

if (typeof x === 'undefined') {
   console.log('x is undefined');
}

// 'typeof' allows us to do the check without crashing our program. Otherwise, this type of error could crash the system for all users.

// Recreate greetUser function, but this time, allow for the name argument to be undefined.


function greetUser(name) {
  // if name exists, say 'hello, name'
  // if it's undefined, say 'hello world'
  if (typeof name !== 'undefined') {
    console.log('hello, ' + name + '!');
  } else {
    console.log('hello world!');
  }

  // OR...

  // if (typeof name === 'undefined') {
  //   console.log('hello world!');
  // } else {
  //   console.log('hello, ' + name + '!');
  // }
}

var myName = 'corrine';
var yourName;
greetUser(myName);
greetUser(yourName);
greetUser();
greetUser('Katie');
greetUser('undefined');
greetUser(hisName);

// Really helpful way to check for undefined if a field is optional and might be empty.





