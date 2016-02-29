console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();
// ==================== Password Mgr App Requirements ====================

// Create 2 functions that let us register new passwords and get existing passwords.

// First function creates a new account with a username and password, takes one argument, `account`
// account has 3 attributes: name, username, password
// account.name > Facebook
// account.username > User12
// account.password > password123

// Second account gets account info. Takes only `accountName` as argument. Find account that matches accountName and return that account.

// Need to also initialize with a variable called 'accounts' to be used for getItemSync and setItemSync, which is an array of accounts.
// Make sure to take into consideration the case when stored 'accounts' has yet to have any value or is undefined.

// ==================== Password Mgr App ====================

function createAccount(account) {
  // initialize with latest value of 'accounts' in storage
  var accounts = storage.getItemSync('accounts');

  if (typeof accounts === 'undefined') {
    accounts = [];
  }

  // add new account to end of array
  accounts.push(account);

  // update stored accounts with new array
  storage.setItemSync('accounts', accounts);

  // return all accounts
  return storage.getItemSync('accounts');

  // or can also just return new account, depending on what the requirements are

  // PRESENTED option:
  // return account;

  // Probably better in order to validate the stored array is correct as opposed to just spitting back out the parameter provided:
  // return accounts[accounts.length-1]


}

// function getAccount(accountName) {
//   var accounts = storage.getItemSync('accounts');
//   var matchedAccount;

//   // first check if 'accounts' exists in storage. if so, run check; if not, set matchedAccount to undefined.
//   if (typeof accounts != 'undefined') {
//     for (var i = 0; i < accounts.length; i++) {
//       if (accountName === accounts[i].name) {
//         matchedAccount = accounts[i];
//       }
//     }
//   } else {
//     matchedAccount = undefined;
//   }

//   return matchedAccount;
// }

// PRESENTED method for getAccount:
// function getAccount(accountName) {
//   var accounts = storage.getItemSync('accounts');
//   var matchedAccount;

//   // Use forEach instead of for loop - much cleaner
//   accounts.forEach(function(account) {
//     if (account.name === accountName) {
//       matchedAccount = account;
//     }
//   });

//   return matchedAccount;

  // Still think it should have a check for undefined so that if someone calls getAccount before accounts is created, program returns undefined instead of just crashing.
// }

// COMBINED version of getAccount using forEach and a check to make sure accounts exist:
// function getAccount(accountName) {
//   var accounts = storage.getItemSync('accounts');
//   var matchedAccount;

//   if (typeof accounts != 'undefined') {
//     accounts.forEach(function(account) {
//       if (account.name === accountName) {
//         matchedAccount = account;
//       }
//     });
//   } else {
//     matchedAccount = undefined;
//   }

//   return matchedAccount;
// }

// ALTERNATIVE found in course questions, combined with my check for undefined:
function getAccount(accountName) {
  var accounts = storage.getItemSync('accounts');

  if (typeof accounts != 'undefined') {
    // Using loop and returning value upon match means loop cancels upon a match - doesn't need to still go through everyone item in the array as it would with a forEach.
    for (var i = 0; i < accounts.length; i++){
      if (accounts[i].name === accountName) {
        return accounts[i];
      }
    }
  } else {
    return undefined;
  }
}


// ==================== Exercising Password Mgr App ====================

console.log(getAccount('Instagram'));

createAccount({
  name: 'Facebook',
  username: 'raielin',
  password: 'raiepass123'
});

createAccount({
  name: 'Google',
  username: 'CL24',
  password: 'testy38'
});

createAccount({
  name: 'Instagram',
  username: 'feebee',
  password: 'carousel92'
});

createAccount({
  name: 'CNN',
  username: 'angie',
  password: 'freeNews'
});

var accounts = storage.getItemSync('accounts');
console.log(accounts);

console.log(getAccount('Instagram'));
console.log(getAccount('CNN'));
console.log(getAccount('Twitter'));

// PRESENTED method of using getAccount:
// var facebookAccount = getAccount('Facebook');
// console.log(facebookAccount);
// Think my way is more efficient, though, unless there's a reason we need to store the account in a variable to access later, which doesn't seem like the case right now.

// FOR TESTING ONLY: destroys stored accounts array after running tests
storage.removeItem('accounts');
