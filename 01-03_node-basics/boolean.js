// booleans are just another type of data, like strings and numbers.
// creating a boolean is the same as creating a string or number by creating variable and naming it.

var isValid = true;
// Set 'isValid' equal to value 'true'.

// 'true' is a reserved boolean keyword in JavaScript. 'false' is the other boolean keyword. These are the only two boolean values in JavaScript. It's like a lightswitch - either on or off. No in-between state, no third or fourth state.
isValid = true;

// Booleans help in many ways. Think of to-do app - something is either completed or not. Validation - it is valid or it isn't.

// Using a boolean in 'if' statement
if (isValid === true) {
  console.log('Data is valid!');
} else {
  console.log('Data is not valid!');
}


// Can toggle value of a boolean
isValid = false;
// can reset value to the opposite of what it was. Program will read the most recent or last value a variable is set to prior to any call.

isValid = !isValid;  // Sets 'isValid' to 'NOT false' or 'true'
// Alternatively, the 'bang' or exclamation mark means the opposite of whatever the value currently is. So this resets 'isValid' to equal the opposite of it's last value.

// In conditionals and 'if' statement conditions, can leave off the comparison completely, since any conditional is already checking for a boolean value, so if the condition itself is equal to a boolean value, it will take that value and only run when the condition equals true.

if (isValid) {
  console.log('Data is valid!');
} else {
  console.log('Data is not valid!');
}

// Using '===' results in a boolean value.
console.log('a' === 'a');  // resolves with boolean value 'true'
console.log('a' === 'b');  // resolves with boolean value 'false'

// Since '===' is passing a boolean value to the conditional anyway, using just the boolean value itself, or a variable that equals a boolean value, gives the same result.

// Can also flip the value directly inside a conditional. Doesn't change the value of the variable, but inside the conditional it is evaluated as "NOT isValid" or "NOT true".
if (!isValid) {
  console.log('Data is valid!');
} else {
  console.log('Data is not valid!');
}



// Create a function called toggle boolean. Takes a boolean value as an argument. If value is 'true' set it to 'false' and vice versa. Then return new value and log it to the screen. Only operate function IF value IS a boolean.

function toggleBoolean(value) {
  if (typeof value === 'boolean') {
    value = !value;
    return value;
  } else {
    return value;
  }
}

var newValue = true;
console.log(toggleBoolean(newValue));

var newValue2 = false;
newValue2 = toggleBoolean(newValue2);
console.log(newValue2);

var newValue3 = 7;
console.log(toggleBoolean(newValue3));

var newValue4 = 'happiness';
console.log(toggleBoolean(newValue4));


// OR...
function toggleBoolean2(value) {
  if (typeof value === 'boolean') {
    return !value;
  } else {
    console.log('Warning! Not a boolean.');
  }
}

var newBoolean = toggleBoolean2(newValue);
console.log(newBoolean);

newBoolean = toggleBoolean2('newValue');
console.log(newBoolean);

// 'typeof' operator returns the data type of the variable in string form, i.e. 'number', 'string', 'boolean', etc. Note that 'typeof' is not a function. An operator is a special class of things in JavaScript that is different than a function.

// 'typeof' can be very useful especially when getting input from users and validating the input.
