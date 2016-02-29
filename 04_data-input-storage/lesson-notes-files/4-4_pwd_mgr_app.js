console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

function createAccount(account) {
  var accounts = storage.getItemSync('accounts');

  if (typeof accounts === 'undefined') {
    accounts = [];
  }

  accounts.push(account);

  storage.setItemSync('accounts', accounts);

  return storage.getItemSync('accounts');
}

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

// FOR TESTING ONLY: clears stored accounts array after running tests
storage.removeItem('accounts');
