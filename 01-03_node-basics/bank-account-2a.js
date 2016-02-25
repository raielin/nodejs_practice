var accounts = [];

// createAccount()
function createAccount(account) {
  accounts.push(account);
  return account;
}

// getAccount()
function getAccount(username) {
  var matchedAccount;
  accounts.forEach(function(account) {
    if (account.username === username) {
      matchedAccount = account;
      console.log('\nAccount found.\nUsername: ' + matchedAccount.username + '\nBalance: $' + matchedAccount.balance + '\n');
    } else {
      console.log('\nSorry. No such account found.')
    }
  })

  return matchedAccount;
}

// getBalance()
function getBalance(account) {
  return account.balance;
}

// deposit()
function deposit(account, amt) {
  console.log('\nYour current balance is: $' + getBalance(account) + '\nYou are depositing $' + amt + ' into your account.');
  account.balance += amt;
  console.log('Your new balance is: $' + getBalance(account));
}

// withdraw()
function withdraw(account, amt) {
  console.log('\nYour current balance is: $' + getBalance(account) + '\nYou are withdrawing $' + amt + ' from your account.');
  account.balance -= amt;
  console.log('Your new balance is: $' + getBalance(account));
}




// -------------------------------------
var corrineAccount = createAccount({
  username: 'Corrine',
  balance: 0
});

console.log(accounts);

console.log(getBalance(corrineAccount));

getAccount('Corrine');

getAccount('corrine');

deposit(corrineAccount, 865435);

console.log('\n' + getBalance(corrineAccount));

withdraw(corrineAccount, 111111);


