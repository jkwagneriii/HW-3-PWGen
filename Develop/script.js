// Possible User Variable
var passLength;
var confirmLower;
var confirmUpper;
var confirmNum;
var confirmSpec;

// Possible Values 

//Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

//Special Characters
specCharacter = [
  "!", "@", "#", "$", "%", "^", "&", "*", "'", "(", ")", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "\\", "]", "_",  "`",  "{", "|", "}",  "~",
];

//Alphabetical Characters (lowercase)
alpha = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]







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
