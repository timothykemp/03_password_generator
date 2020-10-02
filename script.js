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




// Password generator logic
function generatePassword() {

  // Global variables
  var passLength = numVal();
  var charSet = criteriaChoices();
  var password = "";

  // Password length choice and choice validation
  function numVal() {

    // Prompt for user to enter desired password length 
    var passLengthEntered = Number(prompt("Enter a desired password length between 8 and 128"));

    if ((isNaN(passLengthEntered)) ||
      (passLengthEntered < 8) ||
      (passLengthEntered > 128) ||
      (!Number.isInteger(Number(passLengthEntered)))) {
      alert("You must enter a whole number between 8 and 128");
      return numVal();
    } else {
      return passLengthEntered;
    }
  }

  // Build character set based on criteria choices
  function criteriaChoices() {

    // Character set built based on criteria choices
    var charChoice = [];

    // Password character type choices
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

    // User chooses character type options
    var incLower = confirm("Press OK to include lower case characters");
    var incUpper = confirm("Press OK to include upper case characters");
    var incNum = confirm("Press OK to include numeric characters");
    var incSpec = confirm("Press OK to include special characters");

    // If user chooses to include lowercase characters, add to charChoice
    if (incLower) {
      charChoice = charChoice.concat(lowerCase);
    }

    // If user chooses to include uppercase characters, add to charChoice
    if (incUpper) {
      charChoice = charChoice.concat(upperCase);
    }

    // If user chooses to include numeric characters, add to charChoice
    if (incNum) {
      charChoice = charChoice.concat(numbers);
    }

    // If user chooses to include special characters, add to charChoice
    if (incSpec) {
      charChoice = charChoice.concat(special);
    }

    console.log(incLower);
    console.log(incUpper);
    console.log(incNum);
    console.log(incSpec);

    if (charChoice.length === 0) {
      alert("You must choose at least one character type");
      return criteriaChoices();
    } else {
      return charChoice;
    }
  }



  // Loop new charSet array by desired length to create password
  // password += charset[Math.random + charset.length]
  // password = password + WHATEVERGOESHERE

  // Console logs
  console.log(passLength);
  console.log(charSet);


  // Update this to print out the generated password
  return 12345 //password
}




