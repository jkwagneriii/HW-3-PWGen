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

//For UPPERCASE conversions
upperAlpha = [];

//The return statement ends the execution of a function
//Convert to UPPERCASE
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//Variable for uppercase alphabetical characters
var toUpper = function (x) {
  return x.toUpperCase();
}
alphaX = alpha.map(toUpper); 

//User preferences will result in the final password display
var userPref;

//Master generate function
function generatePassword() {
//The parseInt function converts its first argument to a string, parses that string, then returns an integer
  passLength = parseInt(
    prompt("Please choose a password length between 8 - 50 characters."));
  if (!passLength) {
    alert("For one to recieve a password, one must specify a length!");
  } 
  else if (passLength < 8 || passLength > 50) {
    alert("I said BETWEEN 8 - 50 characters! Try again.");
  }
}







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
