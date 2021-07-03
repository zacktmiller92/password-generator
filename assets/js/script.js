// Assignment code here

  var specialChars = ['!', '#', '$', '%', '&', '(', ')', '*', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  

function generateRandomNumber (min,max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

function generatePassword() {
  var chars = []
  var passwordOutput = []
  var howManyCharacters = 10;
  var howManyCharacters = window.prompt("How many characters do you want?")
  howManyCharacters = parseInt(howManyCharacters)

  while ( howManyCharacters >= 128 || howManyCharacters <= 8 || isNaN(howManyCharacters)) {
    alert("Enter a number between 8 and 28 characters.")
    var howManyCharacters = window.prompt("How many characters do you want?")
    howManyCharacters = parseInt(howManyCharacters)
  }

  var wantNumbers = window.confirm("Do you want numbers?");
  var wantSpecialChars = window.confirm("Do you want special characters?");
  var wantUpper = window.confirm("Do you want uppercase characters?");
  var wantLower = window.confirm("Do you want lowercase characters?");

  if (wantNumbers) {
    chars = chars.concat(nums)
  };
  if (wantSpecialChars) {
    chars = chars.concat(specialChars)
  };
  if (wantUpper) {
    chars = chars.concat(upperLetters)
  };
  if (wantLower) {
    chars = chars.concat(lowerLetters)
  };
  //generate the password
  for (var i = 0; i < howManyCharacters; i++) {
    passwordOutput = passwordOutput.concat(chars[generateRandomNumber(1, chars.length)])
  };
  return (passwordOutput.join(""));
};

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
