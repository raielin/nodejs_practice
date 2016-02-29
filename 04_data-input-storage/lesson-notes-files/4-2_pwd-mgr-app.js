console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();
// initSync() is a node-persist function that initializes our computer to start writing and saving variables.

// storage.setItemSync('name', 'Corrine');
// This saves a new variable to our machine that we can access later. setItemSync takes two arguments: a name, and a value - like a key-value pair.

// Run this running `$ npm start` in command line. Once run, 'name' variable will be stored with value 'Corrine'. Can comment out the last line of code and run `$ npm start` again with the following code to prove that 'name' has the value 'Corrine':
// var printName = storage.getItemSync('name');
// console.log('Saved name is: ' + printName);

// This is how we will store and get passwords in our app.

// For the above we stored strings, but we could also store an object, an array, or an array of objects:

// storage.setItemSync('accounts', [{
//   username: 'Corrine',
//   balance: 0
// }]);

// Run the above once with `$ npm start`. Then comment out the above and run again with the following code:

var printAccounts = storage.getItemSync('accounts');
// console.log(printAccounts);

// We can store multiple user accounts, todo items, etc. Can create memory of what was previously ran.

//=============================== CHALLENGE ===============================

// Load in accounts array.
// var bankAccounts = storage.getItemSync('accounts');

// Push on a new account.
// bankAccounts.push({
//   username: 'Carmen',
//   balance: 10
// });

// Save using setItemSync.
// storage.setItemSync('accounts', bankAccounts);

// Comment out above code, run getItemSync to confirm new accounts were saved.
// var printBankAccounts = storage.getItemSync('accounts');
// console.log(printBankAccounts);


//=============================== CHALLENGE ANSWER ===============================

// Load in accounts array
// Push on a new account.
// printAccounts.push({
//   username: 'Dennis',
//   balance: 100
// })

// // Save using setItemSync.
// storage.setItemSync('accounts', printAccounts);

// Comment out above code, run getItemSync to confirm new accounts were saved.
console.log(printAccounts);
