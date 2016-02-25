// Scope is a way to know which variables you have access to, i.e. what is a variable's scope?

// This is a global variable. It is created/defined outside of any functions and is, therefore, accessible from anywhere inside of the program.
var age = 24;

console.log('Outside any functions: ' + age);

function localFunction() {
  console.log('Inside localFunction(): ' + age);
}

localFunction();
// age still prints because it is a global variable and can access it inside any function within this program.

// the reverse is not true. a local variable (as in, local to a specific function) is not accessible outside of its function.

function localFunction2() {
  var name = 'name';
  console.log('Inside localFunction2(): ' + name);
}

localFunction2();  // --> 'Inside localFunction2(): name'

// console.log('Outside any functions: ' + name);  // --> 'ReferenceError: name is not defined'
// Cannot call name outside of its function. Get a reference error saying the variable is not defined.


function localAgeFunction() {
  age = 0;
  // notice there is no 'var' keyword required because the variable has already been declared and defined outside the function as a global variable.
}

localAgeFunction();
console.log(age)  // --> 0
// Proves that global variables can be modified inside functions


function localNewAgeFunction() {
  var age = 0;
}

localNewAgeFunction();
console.log(age)  // --> 24
// The global variable is declared and defined in the global namespace above. But inside localNewAgeFunction() we create a *local* variable that just happens to be named the same as the global variable - it does NOT, however, re-initialize or modifying the global variable. It is just a local variable within the scope of localNewAgeFunction().

function localDoubleAgeFunction() {
  var age = 0;

  age = 0;
}

localDoubleAgeFunction();
console.log(age)  // --> 24
// Again, calling 'age' in the scope of localDoubleAgeFunction() only modifies the local 'age' variable that was created inside the function, NOT the global variable.
// When referencing a variable inside a function, JS first looks for that variable inside the local function. Only if it doesn't find it declared inside the function will it then go outside the function and look at the global variables. (Like it does in the case of localAgeFunction().)

