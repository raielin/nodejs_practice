// Create new array. Create new variable. Set value with brackets.
var contestants = [];
// Creates emtpy array. Still have to put items in array.

contestants = ['george', 'brian', 'harry'];
var item = 4;
var arrays2 = [100, 50, 'string', true, item];

// Anything you can define as a variable can be put into an array, including functions, other contestants, etc.

// Removing items from an array, call a method on the array variable.
// A method is nothing more than a function that is accessed using "dot" (.) notation.

contestants.push('jimmy')
// Calling the 'push' method or function on our 'contestants' array. Push method takes an argument which is the item or value that will be added on to the end of the given array.

console.log(contestants);
// => [ 'george', 'brian', 'harry', 'jimmy' ]
// We see that 'jimmy' was "pushed" to the 'contestants' array.

// To add an item on to the beginning of an array use 'unshift' method
contestants.unshift('amy');

console.log(contestants);
// => [ 'amy', 'george', 'brian', 'harry', 'jimmy' ]

// Can also pull items off an array with 'pop' method. Pop doesn't take an argument, it simply removes and returns the last item in an array, which can then be stored in another variable.

var winner = contestants.pop();

console.log(winner);
// => jimmy

console.log(contestants);
// => [ 'amy', 'george', 'brian', 'harry' ]

var runnerUp = contestants.shift();
// Reverse of pop - removes and returns the first item in an array.

console.log(runnerUp);
// => amy

console.log(contestants);
// => [ 'george', 'brian', 'harry' ]

// Arrays are also great for iterating over the elements, i.e. can move over each element and do something with it.

var fruits = ['apple', 'banana', 'strawberry', 'pineapple'];

// Print each fruit out to the screen with forEach() method, which takes a function as its argument. This is the function that will get run for each item of the array. This function will receive access to each item in our fruits array, which gets passed as the first and only argument to the 'callback' function. A callback function is any function that gets called back and that's also passed as a function's argument.

// Notice there is no name for our internal function. In JS, function names are not required unless we plan to call it later on. In this case, we're using the function as an argument, and have no need to call it outside the forEach() method, so no name is necessary. We use an anonymous function.

fruits.push('grape');

fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Can pull out an item at a specific index location. The first item in an array is at index 0.

console.log(fruits[0]);
// => apple

console.log(fruits[1]);
// => banana

// Can get the total number of elements in the array using the length property that's accessible for any array, which returns a number that represents the total number of items in the array.

console.log(fruits.length);
// => 5

// CHALLENGE: Use the grades array and create a new variable called totalGrade and set it to 0. Then use forEach to go over each item, then add that grade to the totalGrade. End up with sum of all grades in totalGrade. Log out avg grade to console.

var grades = [100, 50, 75, 38, 98];
var totalGrade = 0;

grades.forEach(function(grade) {
  totalGrade = totalGrade + grade;
  console.log('Current total is ' + totalGrade);
});

console.log('Total Grade = ' + totalGrade);
// => Total Grade = 361

// console.log('Average Grade = ' + totalGrade/grades.length);
// => Average Grade = 72.2

var average = totalGrade / grades.length;
console.log('Average Grade = ' + average);
// => Average Grade = 72.2
