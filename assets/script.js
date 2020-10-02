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

  // Initial global variables
  var passLength = numVal();
  var userCancel = "Changed your mind? Click Generate Password to try again!";

  // If user hits Cancel on prompt, stop script and display userCancel message
  if (passLength === undefined) {
    return userCancel;
  };

  // Remaining global variables if user does not cancel
  var charSet = criteriaChoices();
  var password = buildPass();

  // Password length choice and choice validation
  function numVal() {

    // Prompt for user to enter desired password length 
    var passLengthEntered = prompt("Enter a desired password length between 8 and 128");

    // If user hits OK, validate entry, otherwise discontinue function
    if ((typeof (passLengthEntered !== "object")) && passLengthEntered !== null) {

      // Validate user's password length entry and display alert if invalid
      if ((isNaN(passLengthEntered)) ||
        (passLengthEntered < 8) ||
        (passLengthEntered > 128) ||
        (!Number.isInteger(Number(passLengthEntered)))) {
        alert("You must enter a whole number between 8 and 128");
        return numVal();
      } else {
        return passLengthEntered;
      }
    } else {
      return
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

    // If user chooses to add character types, include them in charChoice
    if (incLower) {
      charChoice = charChoice.concat(lowerCase);
    }

    if (incUpper) {
      charChoice = charChoice.concat(upperCase);
    }

    if (incNum) {
      charChoice = charChoice.concat(numbers);
    }

    if (incSpec) {
      charChoice = charChoice.concat(special);
    }

    // If user doesn't choose any character types, display alert and restart function
    if (charChoice.length === 0) {
      alert("You must choose at least one character type");
      return criteriaChoices();
    } else {
      return charChoice;
    }
  }

  // Create new password using passLength and charSet
  function buildPass() {

    // First var stores random character from loop and second holds concat of all loops 
    var passChar = "";
    var newPass = "";

    // Loop new charSet array passLength times to choose random characters for password
    for (var i = 0; i < passLength; i++) {
      var passChar = charSet[Math.floor(Math.random() * charSet.length)];
      newPass = newPass.concat(passChar);
    }

    return newPass;
  }

  // Pass new password so it can be displayed on website
  return password;
}




