// Assignment code here
function generatePassword () {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var numbers = "1234567890"

  var symbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~;"

  var passwordLength = parseInt(prompt("Please enter the number of character length you would like your password to be.  Select a number between 8-128 characters."));
  
  if(isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128")
    return "";
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128")
    return "";
  } 
  console.log(passwordLength)
  var lowerQuestion = confirm("Would you like the password to have lower case letters?")

  var upperQuestion = confirm("Would you like the password to have upper case letters?")
  
  var numbersQuestion = confirm("Would you like the password to have numbers?")
  
  var symbolsQuestion = confirm("Would you like the password to have special characters?")
  
  var charResults = ""
  console.log(lowerQuestion);
  
  if (lowerQuestion) {
    charResults += lowerCase
  } 
  
  if (upperQuestion) {
    charResults += upperCase
  } 
  
  if (numbersQuestion) {
    charResults += numbers
  } 
  
  if (symbolsQuestion) {
    charResults += symbols
  } 


  var resultPassword = ""
  
  for (var i = 0; i < passwordLength; i++) {
    resultPassword += charResults[getRandomInt(charResults.length)]
  }
  console.log(charResults)
  return resultPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
// {
//   const passwordLength = passwordLength.value
// }

