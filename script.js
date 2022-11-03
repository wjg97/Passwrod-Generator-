//Assignment Code

// Gets references to the #generate element

document.querySelector("#generate").addEventListener("click", writePassword);

//Declairs password parameters 
let confirmLength = "";
let confirmSpecialCharacter;
let confirmNumericCharacter;
let confirmUpperCase;
let confirmLowerCase;

//declairs variables for the password 
number = '0123456789';
specialChar = '!@#$%^&*?<>~';
alphaLower = 'abcdefghijklmnopqrstuvwxyz';
alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//first prompt aaking about password length
function generatePassword() {
  let confirmLength = (prompt("How many characters would you like your password?"));

  while(confirmLength <= 8 || confirmLength >= 128) {
      alert('Password length must be betweem 9-127 characters, Try Again');
      let confirmLength = (prompt('How many characters would you like your password?'));
      }
  
      alert(`Your password will have ${confirmLength} characters`);
//Prompts for password parameters       
  let confirmSpecialCharacter = confirm('Click OK to confirm if you would like to use Special Characters');
  let confirmNumericCharacter = confirm('Click OK to confirm if you would like to use Numeric Characters');
  let confirmLowerCase = confirm('Click OK to confirm if you would like to use Lowercase Letters');
  let confirmUpperCase = confirm('Click OK to confirm if you would like to us Uppercase Letters');
//Makes user choose one parameter or there wouldnt be a password
    while(confirmUpperCase === false && confirmLowerCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
      
      alert('you must choose at lease one parameter');
//re-prompts for password parameter
      let confirmSpecialCharacter = confirm('Click OK to confirm if you would like to use Special Characters');
      let confirmNumericCharacter = confirm('Click OK to confirm if you would like to use Numeric Characters');
      let confirmLowerCase = confirm('Click OK to confirm if you would like to use Lowercase Letters');
      let confirmUpperCase = confirm('Click OK to confirm if you would like to us Uppercase Letters');     
    }  
//These If statements combine the called passwordCharacter with the arrays above
      let passwordCharacters = [] 

    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters + specialChar;
    } 

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters + number;
    }

    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters + alphaLower;
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters + alphaUpper;
    }

    console.log(passwordCharacters);


  let randomPassword = ""
//for loop shiffling above arrays with randomPassword to create a random password
  for (let i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
    }
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
