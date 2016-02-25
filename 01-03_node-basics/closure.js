// A closure is nothing more than function created inside another function such that they have access to parent function variables.

// We're going to create a greetMaker() function that builds a greeter function and returns that function.
function greetMaker(name) {
  function greet() {
    console.log('Hello, ' + name + '!');
  }

  return greet;
}

var greetCorrine = greetMaker('Corrine');

// Running the program with just the above code results in no visual result because we haven't actually called greet() yet. By setting greetCorrine equal to greetMaker('Corrine'), greetCorrine is actually a function with the 'name' argument set to 'Corrine'.

// So, calling greetCorrine(); runs the full greetMaker() function, including the local greet() function.

greetCorrine();  // --> 'Hello, Corrine!'

// Scope still applies with function inside a function. The greet() function is only accessible from within the greetMaker() function. And the greetMaker() function would not have access to any variables inside of greet() if there were any.

// greet() will always have access to whatever the 'name' argument is. This is the great part of a closure (the internal function), it remembers the value of every variable when the function was initially created. So by setting greetCorrine equal to greetMaker('Corrine'), running greetCorrine() means that the internal greet() function will always utilize the value 'Corrine' for the local 'name' variable when it was created.

var greetWorld = greetMaker('World');
greetWorld();

// CHALLENGE:
// Create a function called 'createAdder' that takes one argument called 'baseNumber'. Can create an adder that adds stuff to the number 3. 3 would be the baseNumber.
