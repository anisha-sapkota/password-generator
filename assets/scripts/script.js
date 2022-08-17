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

  if (incLowercase || incUppercase || incNumbers || incSpecialChars) {
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
