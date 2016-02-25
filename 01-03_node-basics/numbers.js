var age = 36;

// all basic math operators are valid.

// 2 ways to create a variable - initialize it with a value, or not give it a default value.
var results;

results = age + 6;
console.log('age + 6 = ' + results);

results = age - 1;
console.log('age - 1 = ' + results);

results = age * 3;
console.log('age * 3 = ' + results);

results = age / 6;
console.log('age / 6 = ' + results);

// remainder division with '%' - does the division operation and then will return the remainder value.
results = age % 5;
console.log('age % 5 = ' + results);

// Incrementing variables by 1
results = results + 1;
//  or results = results - 1;
console.log('plus 1: ' + results);

// Incrementing shorthand
results--;
// or results++;
console.log('minus-minus: ' + results);


// Order of operations when using plus-plus or minus-minus.
// When using ++ or -- before the variable name, it returns the value AFTER incrementing.
// When using ++ or -- after the variable name, the operation returns the value BEFORE the incrementation.
var num = 19;
console.log(num);  // expect result to be 19.
console.log(++num);  // expect result to be 20.
console.log(num++);  // expect result to be 20.
console.log(num);  // expect result to be 21.

console.log('\n\n');



// create three variables, each with a different test grade of 0% - 100%. Add numbers, divide by total # of tests, and print out the person's avg. grade.

var test1 = 75;
var test2 = 99;
var test3 = 84;

var avg = (test1 + test2 + test3) / 3;

console.log('Your average grade is: ' + avg + '.');

