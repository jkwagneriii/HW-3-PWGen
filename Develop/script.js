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

//Data space for UPPERCASE conversions
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
  else {
    confirmLower = confirm("Would you like your password to have LOWERCASE LETTERS?");
    confirmUpper = confirm("Would you like your password to have UPPERCASE LETTERS?");
    confirmNum = confirm("Would you like your password to have NUMBERS?");
    confirmSpec = confirm("Would you like your password to have SPECIAL CHARACTERS?");
  }

  //The start of a the main IF ELSE statement

  if (!confirmLower && !confirmUpper && !confirmNum && !confirmSpec) {
    alert("Sorry! You gotta choose something!");
  }

  //The concat() method concatenates the string arguments to the calling string and returns a new string.

  //4 confirms create 1 else if

  else if (confirmLower && confirmUpper && confirmNum && confirmSpec) {
    userPref = alpha.concat(alphaX, number, specCharacter);
  }

  //3 confirms create 4 else if

  else if (confirmLower && confirmNum && confirmSpec) {
    userPref = alpha.concat(number, specCharacter);
  }
  else if (confirmUpper && confirmNum && confirmSpec) {
    userPref = alphaX.concat(number, specCharacter);
  }
  else if (confirmLower && confirmUpper && confirmNum) {
    userPref = alpha.concat(alphaX, number);
  }
  else if (confirmLower && confirmUpper && confirmSpec) {
    userPref = alpha.concat(alphaX, specCharacter);
  }

  //2 confirms create 6 if else

  else if (confirmLower && confirmNum) {
    userPref = alpha.concat(number);
  }
  else if (confirmUpper && confirmNum) {
    userPref = alphaX.concat(number);
  }
  else if (confirmSpec && confirmLower) {
    userPref = specCharacter.concat(alpha);
  }
  else if (confirmSpec && confirmUpper) {
    userPref = specCharacter.concat(alphaX);
  }
  else if (confirmSpec && confirmNum) {
    userPref = specCharacter.concat(number);
  }
  else if (confirmLower && confirmUpper) {
    userPref = alpha.concat(alphaX);
  }

  //1 confirm creates 4 else if

  else if (confirmUpper) {
    userPref = upperAlpha.concat(alphaX);
  }
  else if (confirmLower) {
    userPref = alpha;
  }
  else if (confirmNum) {
    userPref = number;
  }
  else if (confirmSpec) {
    userPref = specCharacter;
  }

  // STOPPED HERE JAKE



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
