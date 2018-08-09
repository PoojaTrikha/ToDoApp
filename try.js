const currentUser = {
    wallet: 10
  }
  
  const accounts = [
    {
      id: 1,
      pin: 1234,
      name: 'Mimi Magusin',
      balance: 2315
    },
    {
      id: 2,
      pin: 2727,
      name: 'Wouter de Vos',
      balance: 9001
    },
    {
      id: 3,
      pin: 4567,
      name: 'Bram Koot',
      balance: 6754
    },
  ]
  
  let currentAccount = null
  var valid = false;
  var invalid = true;
  
  
  function login(){
   
    var newAcc = parseInt(window.prompt('Please enter your id of account'));
   /* if(newAcc<=5)
    {
      alert("please enter 4 digits value");
    }
    else
    {
      var newAcc1=newAcc;
    } */
    var newPin = parseInt(window.prompt('Please enter a 4 digit pin number'));
    console.log(newPin.length);
    if(newPin.length > 4)
    {
      alert("please enter 4 digits value");
      initialMenu();
      
    }
    else
    {
      var newPin1=newPin;
    }
    for(var i=0;i<accounts.length;i++){
          
      if(newAcc===accounts[i].id && newPin1===accounts[i].pin){
        valid = true;
      }
    }
    if(valid)
    {
      alert("Login successful!!");
      return false;
    }
    else if(invalid)
    {
      alert("Login is Unsuccessful!!");
      return true;
    }
  }
  
  function createAccount(name, pin){
    const account = {
      id: accounts.length + 1, // not a unique number but it will do for now
      pin: pin,
      name: name,
      balance: 0
    }
  
    accounts.push(account)
  }
  
  function openAccount() {
    const newName = window.prompt('Please enter your name')
    const newPin = parseInt(window.prompt('Please enter a 4 digit pin number'))
    createAccount(newName, newPin)
    window.alert('Account created!')
    initialMenu()
  }
  
  function initialMenu(){
    const userInput = window.prompt(`What would you like to do today?
    Please enter a number:
    If you already have an account press 1
    For opening a new account press 2
    To quit press 3`)
  
    switch (userInput) {
      case '1':
        login()
        break;
  
      case '2':
        openAccount()
        break;
      
      case '3':
        window.alert('Bye!')
        break;
  
      default:
        initialMenu()
        break;
    }
  }
  
  function start(){
    initialMenu()
  }