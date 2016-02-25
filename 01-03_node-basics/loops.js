// Create function that counts to 10 and does a console.log every time it gets to a new number
for(var i = 0; i < 11; i++) {
  console.log('for i: ' + i);
}

// PROVIDED EXAMPLES:
var ii = 0;
var countLimit = 8;

while(ii < countLimit) {
  console.log('while ii: ' + ii);
  ii++;
}

// For loop takes an initializer, a condition, incrementer or decrementer
for(ii = 0; ii < countLimit; ii++) {
  console.log('for ii: ' + ii);
}

// In most cases, we'll use the 'for' loop over the 'while' loop unless it's a special circumstance.


// CHALLENGE:
// Create a function called 'countDown' that takes 2 arguments - a starting point variable, and a stopping point. Stopping point should be less than the starting point. Write a program that counts down from the starting point to the stopping point using a 'for' loop and a 'while' loop, printing out the current count.

function countDownWhile(startingPoint, stoppingPoint) {
  var count = startingPoint;
  while(count >= stoppingPoint) {
    console.log('countDownWhile: ' + count);
    count--;
  }
}

function countDownFor(startingPoint, stoppingPoint) {
  for(i = startingPoint; i >= stoppingPoint; i--) {
    console.log('countDownFor: ' + i);
  }
}

countDownWhile(10, 0);

countDownFor(20, 10);


// PROVIDED ANSWER:
function countDownWhile2(startingPoint, stoppingPoint) {
  while(startingPoint >= stoppingPoint) {
    console.log('countDownWhile2: ' + startingPoint);
    startingPoint--;
  }
}


function countDownFor2(startingPoint, stoppingPoint) {
  // 'for' doesn't need an initializer because startingPoint value is given in the argument of the function. Can leave initializer section blank or can just type 'startingPoint' in initializer section to make it more readable.
  for(startingPoint; startingPoint >= stoppingPoint; startingPoint--) {
    console.log('countDownFor2: ' + startingPoint);
  }
}

countDownWhile2(34, 24);
countDownFor2(23, 12);
