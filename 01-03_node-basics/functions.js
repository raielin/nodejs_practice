// Four main parts to a function. Use "function" keyword. Then name function. Three (). Four {} - this is the code you want to run.

function greetUser() {
  console.log('Hello world!');
}

// Calling a function means executing or running the function.
greetUser();

// Can call function multiple times:
greetUser();
greetUser();

// Argument - is what goes inside the parenthese. It's a variable that is only accessible INSIDE the function it's given to.

function greetUser2(name) {
  console.log('Hello ' + name + '!');
}

// Used this way, by default, 'name' has no value - it is undefined. Undefined variables are nothing - not a string, number, etc. It's its own type called 'undefined'.

// To pass a value into 'name' we have to pass a value into the function's argument when we call the function.

greetUser2('Corrine')
greetUser2('Andrew');

// This is what we are doing with console.log - where 'log' is the function that takes in the value that it prints to the screen.

// Can add as many arguments as we want.

function greetUser3(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName + '!');
}

greetUser3('Corrine', 'Lin');
greetUser3('Liz', 'Burnham');

// Right now our function just prints a message. We need function to run an operation and get a value back.

// To return something from a function, use 'return' keyword. 'return' can ONLY be used from INSIDE a function, and can only be used ONCE within each function.

// Can return anything - a number, a string, a variable, another function, etc.

function greetUser4(name, lastName) {
  return 'Hello ' + name + ' ' + lastName + '!';
  // This will return the value to whoever calls the function, but will not PRINT results. Returned value will need to be saved into another value that can then be recalled.
}

// Value returned by greetUser4 has to be stored in a variable.
var greeting = greetUser4('Corrine', 'Lin');
console.log(greeting);

greeting = greetUser4('Liz', 'Burnham');
console.log(greeting);

var greeting2 = greetUser4('Liz', 'Burnham');
console.log(greeting2);

// Any time there is no 'return' in a function, the function will run when called and return 'undefined' by default.

console.log('\n\n');

// Create function called 'add' that takes number A and number B and add them, return the value, call the function, and log out the returned value.

function add(numA, numB) {
  return numA + numB;
}

var a = 5;
var b = 6;
var result = add(a, b);

console.log(a + ' + ' + b + ' = ' + result);

// Alternatives
function addAlt(numA, numB) {
  var sum = numA + numB;
  return sum;
}

var a = 5;
var b = 6;
var result = add(a, b);

console.log(a + ' + ' + b + ' = ' + result);
console.log(add(a, b));
