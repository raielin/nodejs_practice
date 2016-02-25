
// Create objects with a named variable defined with a set of keys (names) and values, called properties or attributes.

// Create new empty object called 'person'.
var person = {};

// To call or set a property for an object, use dot (.) as separator.
person.firstName = 'Corrine';
// Creates property firstName in person object and sets it equal to 'Corrine'.

person.lastName = 'Lin';
person.age = 24;

// Easy to add data to functions this way. Parameter for a function can be the whole object, instead of individual elements.
function greetUser(person) {
  console.log(person.firstName + ' ' + person.lastName + ' is ' + person.age + '.');
}

// Pass person object created initially into greetUser function.
greetUser(person);

// Deleting a value from an object.
delete person.age;

greetUser(person);

// Or, can console.log entire object as a json structure. Makes debugging objects very easy. Can see exactly what values and properties are set.
console.log(person);

// When referencing a property, can use dot notation to create or get the value. Can also use bracket notation - similar to dot notation and complete interchangeable.

person['height'] = '5 feet 5 inches';
console.log(person['firstName'] + ' is ' + person.height + ' tall.');

// Bracket notations can be helpful when you don't know the property name, like if the key or name to the property was provided elsewhere or by another function, with bracket notation you can provide a variable name that the key name is stored in instead of the key name itself.

// Dot notation requires you reference the exact key name itself, but you usually do know it.

var someVariable = 'faveFood';
person[someVariable] = 'ice cream';
console.log(person.faveFood);
console.log(person[someVariable]);

// When creating an object, can add values inside brackets upon initializing.
console.log('\n\n');

var person2 = {
  firstName: 'Frank',
  lastName: 'Smith',
  gender: 'Male',
  sport: 'Tennis'
}

console.log(person2);

person2.car = 'Audi';

console.log(person2);

// Create 'pet' object with 2 properties: name, type or animal. Create new function called 'printPet' that takes the pet object and prints 'You own a <type>. Its name is <name>.'
console.log('\n\n');

var myPet = {
  name: 'Cobi',
  type: 'cat'
}

function printPet(pet) {
  console.log('You have a ' + pet.type + ' named ' + pet.name + '.');
}

printPet(myPet);

