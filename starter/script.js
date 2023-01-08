// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
var passwordLength = prompt("How many characters long is your password going to be?"); // create an if statement to limit password length 10 - 64 characters

if (passwordLength < 10) {
  prompt("Please choose a password that's at least 10 and no longer than 64 characters.")
} else if (passwordLength > 64) {
  prompt("Sorry. Choose a password that is no longer than 64 but has at least 10 characters.")
}
else if (passwordLength > 9) {
  console.log("Password length chosen.");
}


const passLowerCase = confirm("Should your password contain lowercase characters?");

if (confirm == true) {
  userPassword.push(lowerCasedCharacters); // then access lowerCasedCharacters array with possibly with "Math.random().toString(36).slice(2, 10)" from StackOverflow (https://stackoverflow.com/questions/1497481/javascript-password-generator)
  // alert("Your password will feature lowercase letters.");
} else if (confirm == false) {
  alert("Your password won't contain any lowercase letters.");
}
console.log("Lowercase chosen.");
;

const passUpperCase = confirm("Should your password contain uppercase characters?");

if (confirm == true) {
  userPassword.push(upperCasedCharacters);// then access upperCasedCharacters array with possibly with "Math.random().toString(36).slice(2, 10)" from StackOverflow (https://stackoverflow.com/questions/1497481/javascript-password-generator)
  // alert("Your password will feature uppercase letters.")
} else if (confirm == false) {
  alert("Your password won't contain any uppercase letters.")
}
console.log("Uppercase chosen.");
;

function getPasswordOptions() {
  var userPassword = prompt("")
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() { // calls getPasswordOptions and getRandom
  alert("Called this function");
  return "This is the secret password.";

}

// Don't edit below as it should function in returning the newly generated password to user screen.

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);