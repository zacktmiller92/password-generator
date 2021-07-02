// Assignment code here

function generateRandomNumber (min,max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

function generatePassword() {
  var specialChars = ['!', '#', '$', '%', '&', '(', ')', '*', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var chars = []

  var howManyCharacters = window.prompt("How many characters do you want?")
  var howManyCharacters = parseInt(howManyCharacters)
  console.log(howManyCharacters)
  console.log(typeof(howManyCharacters))
  var wantNumbers = window.confirm("Do you want numbers?")
  var wantSpecialChars = window.confirm("Do you want special characters?")
  var wantUpper = window.confirm("Do you want uppercase characters?")
  var wantLower = window.confirm("Do you want lowercase characters?")
  
  // if numbers, append numbers to character array

  // if sc, append special characters to character array
  // if ul, append upper case letetrs to characters array
  // if ll, append lowercase letters
  //generate the password
  //repeat based on number of desired characters
  //add random character from character array to password
  //return the password
  // return "asdf";
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
