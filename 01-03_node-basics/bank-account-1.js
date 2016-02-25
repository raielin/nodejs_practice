// Build basic bank account with four functions to open account, deposit money, withdraw money, know how much money you have in your account.

var account = {
  balance: 0
};

// Deposit money function.
// Takes an account and an amount.
// deposit(account, amt)

function deposit(account, amt) {
  getBalance(account);
  console.log('You are depositing $' + amt + '.');
  // account.balance = account.balance + amt;
  // Short hand for above is '+=' or '-=' which will add or subtract new amount to the variable itself.
  account.balance += amt;
  getBalance(account);
}

// Withdraw money function.
// Takes an account and an amount.
// withdraw(account, amt)

function withdraw(account, amt) {
  getBalance(account);
  console.log('You are withdrawing $' + amt + '.');
  // account.balance = account.balance - amt;
  account.balance -= amt;
  getBalance(account);
}

// Get account balance function.
// Only needs account.
// getBalance(account)
function getBalance(account) {
  console.log('Your current balance is: $' + account.balance + '.');
}

// For getBalance function, could also do:
/*
function getBalance(account) {
  return account.balance
}

console.log(getBalance(account));
*/

var depositAmt = 1700;
var withdrawAmt = 200;

deposit(account, depositAmt);
console.log('\n');
withdraw(account, withdrawAmt);



// Open account function will be added later.
