// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Password generator logic begins

function generatePassword() {

  // Prompt for user to enter desired password length 
  var passLength = Number(prompt("Enter a desired password length between 8 and 128"));

  // Password length validation
  function numValid() {
    if ((isNaN(passLength)) ||
      (passLength < 8) ||
      (passLength > 128) ||
      (!Number.isInteger(Number(passLength)))) {
      alert("You must enter a whole number between 8 and 128");

    }
  }

  // All possible password characters by type
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

  // New array with user's chosen character types included
  var charSet = lowerCase.concat(upperCase, numbers, special);

  // User chooses character type options
  var incLower = confirm("Press OK to include lower case characters");
  var incUpper = confirm("Press OK to include upper case characters");
  var incNum = confirm("Press OK to include numeric characters");
  var incSpec = confirm("Press OK to include special characters");

  // Console logs
  console.log(passLength);
  console.log(typeof passLength);

  console.log(incLower);
  console.log(incUpper);
  console.log(incNum);
  console.log(incSpec);

  // Execute password length validation
  numValid()

}




