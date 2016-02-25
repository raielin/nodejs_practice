// Add a create account function, called 'createAccount', that takes an 'account' object and will store it in an array of accounts. Each item in the array is an account object.

// Account object needs:
// balance
// username

// Once account object is added to accounts array, createAccount returns that account object.

// Create 'getAccount' function. When user comes back, they want to retreive their acccount with their account balance and add deposit or withdrawals to it. One argument: username. Search account objects for matching username. If no account, return 'no account, username undefined'.

var accounts = [];

var account = {};

function createAccount(account) {
  accounts.push(account);
  return account;
}

function getAccount(username) {
  var matchedAccount;

  accounts.forEach(function(account) {
    if (account.username === username) {
      matchedAccount = account;
      console.log('Account found:\n' + matchedAccount.username + '\n' + matchedAccount.balance + '\n');
    } else {
      console.log('No such account was found.')
      // don't need an 'else' here, function can just exit the conditional
    }
  })

  return matchedAccount;
  // need to return matchedAccount outside of forEach's anonymous function, otherwise the return is isolated to to the internal function and not to getAccount.
}

function deposit(account, amt) {
  getBalance(account);
  console.log('You are depositing $' + amt + '.');
  account.balance += amt;
  getBalance(account);
}

function withdraw(account, amt) {
  getBalance(account);
  console.log('You are withdrawing $' + amt + '.');
  account.balance -= amt;
  getBalance(account);
}

function getBalance(account) {
  console.log('Your current balance is: $' + account.balance + '.');

  // could also just do 'return account.balance' and then do any console.log in-line when calling the function.
}


var corrineAccount = createAccount({
  balance: 2000,
  username: 'corrine'
});

var justinAccount = createAccount({
  balance: 1,
  username: 'justin'
});

withdraw(corrineAccount, 10);

deposit(corrineAccount, 220);

withdraw(justinAccount, 25);

deposit(justinAccount, 7000);

getAccount('corrine');
getAccount('cor');
getAccount('justin');
console.log(accounts);


