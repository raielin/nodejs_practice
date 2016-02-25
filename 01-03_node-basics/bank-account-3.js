var accounts = [];

function createAccount(account) {
  accounts.push(account);
  return account;
}

function getAccount(username) {
  var matchedAccount;
  // Use 'for' or 'while' loop to look for a match. If match is found, save to matchedAccount and return it.
  // accounts.forEach(function(account) {
  //   if (account.username === username) {
  //     matchedAccount = account;
  //     console.log('\nAccount found.\nUsername: ' + matchedAccount.username + '\nBalance: $' + matchedAccount.balance + '\n');
  //   } else {
  //     console.log('\nSorry. No such account found.')
  //   }
  // })
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].username === username) {
      matchedAccount = accounts[i];
      console.log('\nAccount found.\nUsername: ' + matchedAccount.username + '\nBalance: $' + matchedAccount.balance + '\n');
      return;
    } else if (i === (accounts.length - 1) && accounts[i].username !== username) {
      console.log('\nSorry. No such account found.')
    }
  }

  return matchedAccount;
}

// Modify deposit and withdraw to only accept a number for the argument. Use typeof operator. If it's not a number console log an error message.

function deposit(account, amt) {
  if (typeof amt === 'number'){
    console.log('\nYour current balance is: $' + getBalance(account) + '\nYou are depositing $' + amt + ' into your account.');
    account.balance += amt;
    console.log('Your new balance is: $' + getBalance(account));
  } else {
    console.log('\nDeposit failed. Please provide a valid number value for your deposit amount.')
  }
}

function withdraw(account, amt) {
  if (typeof amt === 'number'){
    console.log('\nYour current balance is: $' + getBalance(account) + '\nYou are withdrawing $' + amt + ' from your account.');
    account.balance -= amt;
    console.log('Your new balance is: $' + getBalance(account));
  } else {
    console.log('\nDeposit failed. Please provide a valid number value for your deposit amount.')
  }
}

// createBalanceGetter() function which is going to take an account. Use closure. Return an anonymous function that references account.balance and return it.

function getBalance(account) {
  return account.balance;
}

function createBalanceGetter(account) {
  return function () {
    return account.balance;
  }
}




// -------------------------------------

// create account
var corrineAccount = createAccount({
  username: 'Corrine',
  balance: 875624
});

var damienAccount = createAccount({
  username: 'Damien',
  balance: 56
});

var jimAccount = createAccount({
  username: 'Jim',
  balance: 2367
});

var mikeyAccount = createAccount({
  username: 'Mikey',
  balance: 973
});

// get account
console.log("\n======= GET ACCOUNT =======");
getAccount('Mike');
getAccount('Damien');

// deposit
console.log("\n======= DEPOSIT =======");
deposit(damienAccount, 45);
// test other variable types
deposit(jimAccount, undefined);
deposit(corrineAccount, 'twenty');

// withdraws
console.log("\n======= WITHDRAW =======");
withdraw(damienAccount, 45);
// test other variable types
withdraw(jimAccount, undefined);
withdraw(corrineAccount, 'twenty');

// create instance of balanceGetter() and make sure it returns the new balance.
console.log("\n======= GET BALANCE =======");
var getCorrineBalance = createBalanceGetter(corrineAccount);
var getDamienBalance = createBalanceGetter(damienAccount);
console.log('\nCorrine\'s balance is: $' + getCorrineBalance());
console.log('\nDamien\'s balance is: $' + getDamienBalance());
