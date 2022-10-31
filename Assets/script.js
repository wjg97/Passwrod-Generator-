//Assignment Code

// Gets references to the #generate element

document.querySelector("#generate").addEventListener("click", writePassword);
//declairs variables for the password 
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '<', '>', '~'];
var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//Declairs password parameters 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
//first prompt aaking about password length
function generatePassword() {
  var confirmLength = (prompt("How many characters would ypu like your password?"));

  while(confirmLength <= 8 || confirmLength >= 128) {
      alert('Password length must be betweem 9-127 characters, Try Again');
      var confirmLength = (prompt('How many characters would you like your password?'));
      }
  
      alert(`Your password will have ${confirmLength} characters`);
//Prompts for password parameters       
  var confirmSpecialCharacter = confirm('Click OK to confirm if you would like to use Special Characters');
  var confirmNumericCharacter = confirm('Click OK to confirm if you would like to use Numeric Characters');
  var confirmLowerCase = confirm('Click OK to confirm if you would like to use Lowercase Letters');
  var confirmUpperCase = confirm('Click OK to confirm if you would like to us Uppercase Letters');
//Makes user choose one parameter or there wouldnt be a password
    while(confirmUpperCase === false && confirmLowerCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
      
      alert('you must choose at lease one parameter');
//re-prompts for password parameter
      var confirmSpecialCharacter = confirm('Click OK to confirm if you would like to use Special Characters');
      var confirmNumericCharacter = confirm('Click OK to confirm if you would like to use Numeric Characters');
      var confirmLowerCase = confirm('Click OK to confirm if you would like to use Lowercase Letters');
      var confirmUpperCase = confirm('Click OK to confirm if you would like to us Uppercase Letters');     
    }  
//These If statements combine the called passwordCharacter with the arrays above
      var passwordCharacters = [] 

    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

    console.log(passwordCharacters);


  var randomPassword = ""
//for loop shiffling above arrays with randomPassword to create a random password
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
    }
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
