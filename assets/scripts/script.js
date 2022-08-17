// function for getting random lowercase character
function getRandomLowercase() {
  // all lowercase characters
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  // return lowercase character at random index between 0 and 25
  return lowercaseCharacters.charAt(Math.floor(Math.random() * 25));
}

// function for getting random uppercase character
function getRandomUppercase() {
  // all uppercase characters
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // return uppercase character at random index between 0 and 25
  return uppercaseCharacters.charAt(Math.floor(Math.random() * 25));
}

// function for getting random number
function getRandomNumber() {
  // return random number between 0 and 9
  return Math.floor(Math.random() * 9);
}

// function for getting random special character
function getRandomSpecial() {
  // special characters to choose from
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  // return random character from specialChars string
  return specialChars.charAt(
    Math.floor(Math.random() * (specialChars.length - 1))
  );
}

// Function for validating length input
function validateLength(input) {
  // Check if input is not a number
  if (isNaN(input)) {
    // Alert and call generatePassword again
    window.alert("Invalid input! Please enter a number between 8 and 128.");
    generatePassword();
  } else {
    // Guard against decimal number input
    var number = Math.round(+input);
    // Check if the number is between 8 and 128
    if (number >= 8 && number <= 128) {
      // Return input converted to a valid number
      return number;
    } else {
      // Invalid length entered, alert and call generatePassword again
      window.alert(
        "Invalid length entered! Please enter a number between 8 and 128."
      );
      generatePassword();
    }
  }
}

// function for generating password``
function generatePassword() {
  var lengthInput = window.prompt(
    "Please enter password length (between 8 and 128 character)"
  );
  var length = validateLength(lengthInput);

  var incLowercase = window.confirm("Include lowercase characters?");
  var incUppercase = window.confirm("Include uppercase characters?");
  var incNumbers = window.confirm("Include numbers?");
  var incSpecialChars = window.confirm("Include special characters?");

  var optionsSelected =
    incLowercase + incUppercase + incNumbers + incSpecialChars;

  if (optionsSelected) {
    return "password";
  } else {
    window.alert("At least one character type should be selected!");
    generatePassword();
  }
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
generateBtn.addEventListener("click", writePassword);
