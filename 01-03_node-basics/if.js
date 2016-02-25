var averageGrade = 100;
var name = 'Corrine';

// If averageGrade is above 70, print "Congratulations, you passed the course!".  Else, if averageGrade is below 70, print "Sorry, you failed the course."

if (averageGrade === 100 && name === 'Corrine') {
  console.log(name + ' got a perfect grade!');
} else if (averageGrade >= 70) {
  console.log('Congratulations, you passed the course!');
} else {
  console.log('Sorry, you failed the course.');
}

// If statement requires a clause. Else statement doesn't when only it is the final condition and runs if all others pass.

name = 'Andrew'

if (averageGrade === 100 && name !== 'Corrine') {
  console.log(name + ' got a perfect grade!');
} else if (averageGrade >= 70) {
  console.log('Congratulations, you passed the course!');
} else {
  console.log('Sorry, you failed the course.');
}

console.log('\n\n')

// Create new variable called 'friend'. If name is a specific name, print out a message. Else if it's someone I don't know that well, just print 'Hey'. If neither condition passes, print 'Hello, stranger.'

var friend = 'Liz';

if (friend === 'Liz' || friend === 'Birdie') {
  console.log(friend + ' is here!!');
} else if (friend === 'Tony') {
  console.log('Hey.');
} else {
  console.log('Hello, stranger.');
}

console.log('\n');

friend = 'Birdie';

if (friend === 'Liz' || friend === 'Birdie') {
  console.log(friend + ' is here!!');
} else if (friend === 'Tony') {
  console.log('Hey.');
} else {
  console.log('Hello, stranger.');
}

console.log('\n');

friend = 'Tony';

if (friend === 'Liz' || friend === 'Birdie') {
  console.log(friend + ' is here!!');
} else if (friend === 'Tony') {
  console.log('Hey.');
} else {
  console.log('Hello, stranger.');
}

console.log('\n');

friend = 'Steve';

if (friend === 'Liz' || friend === 'Birdie') {
  console.log(friend + ' is here!!');
} else if (friend ==='Tony') {
  console.log('Hey.');
} else {
  console.log('Hello, stranger.');
}

console.log('\n');
