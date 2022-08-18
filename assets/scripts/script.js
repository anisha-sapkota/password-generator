// function for getting random lowercase character
function getRandomLowercase() {
  // all lowercase characters
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  // return lowercase character at random index between 0 and 25
  return lowercaseCharacters.charAt(
    Math.floor(Math.random() * lowercaseCharacters.length)
  );
}

// function for getting random uppercase character
function getRandomUppercase() {
  // all uppercase characters
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // return uppercase character at random index between 0 and 25
  return uppercaseCharacters.charAt(
    Math.floor(Math.random() * uppercaseCharacters.length)
  );
}

// function for getting random number
function getRandomNumber() {
  // return random number between 0 and 9
  return Math.floor(Math.random() * 10);
}

// function for getting random special character
function getRandomSpecial() {
  // special characters to choose from
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  // return random character from specialChars string
  return specialChars.charAt(Math.floor(Math.random() * specialChars.length));
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
  // prompt user for length and store it in variable
  var lengthInput = window.prompt(
    "Please enter password length (between 8 and 128 character)"
  );

  // validate length by calling validateLength function
  var length = validateLength(lengthInput);

  // capture user choices and store in variables
  var incLowercase = window.confirm("Include lowercase characters?");
  var incUppercase = window.confirm("Include uppercase characters?");
  var incNumbers = window.confirm("Include numbers?");
  var incSpecialChars = window.confirm("Include special characters?");

  //  get number of choices selected
  var optionsSelected =
    incLowercase + incUppercase + incNumbers + incSpecialChars;

  // check if at least one choice was selected
  if (optionsSelected) {
    // declare empty password variable
    var password = "";

    // loop until password length is met
    for (var i = 0; i < length; i++) {
      // if user chose lowercase, append random lowercase character
      if (incLowercase) {
        password += getRandomLowercase();
      }
      // if user chose uppercase, append random uppercase character
      if (incUppercase) {
        password += getRandomUppercase();
      }
      // if user chose number, append random number
      if (incNumbers) {
        password += getRandomNumber();
      }
      // if user chose special character, append random special character
      if (incSpecialChars) {
        password += getRandomSpecial();
      }
    }
    // for every user choice we added character of the choice
    // which resulted in password length being length * optionSelected
    // slice the password to correct length
    password = password.slice(0, password.length / optionsSelected);
    // return password
    return password;
  } else {
    // no choice was selected, prompt and call generatePassword function
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
