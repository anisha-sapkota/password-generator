// function for generating password``
function generatePassword() {
  var passwordLength = window.prompt(
    "Please enter password length (between 8 and 128 character)"
  );
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
