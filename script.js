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
function userPassOptions() {
  var options = {
    passwordLength: 0,
    passLowerCase: true,
    passUpperCase: true,
    numberCase: true,
    specialCase: true,
  }

  return options;

}

// Input to choose password length.

var passwordLength = prompt("How many characters long is your password going to be?"); // create an if statement to limit password length 10 - 64 characters

function userPasswordLength() {
  if (passwordLength < 10) {
    prompt("Please choose a password that's at least 10 and no longer than 64 characters.")
  } else if (passwordLength > 64) {
    prompt("Sorry. Choose a password that is no longer than 64 but has at least 10 characters.")
  }
}

console.log("Password length chosen: " + passwordLength);


// Alert to choose Upper Case

var passLowerCase = confirm("Should your password contain lowercase characters?");

if (confirm == true) {

  function getRandomLower(passwordLength) {
    var RandomLowerString = []
    return Math.floor(Math.random() * passwordLength);
  }
  // for (var i = 0; i < passwordLength; i++) {
  //   userPassword.push(lowerCasedCharacters.splice(Math.random() * (lowerCasedCharacters.length - 1), 1).pop());
  // }

  // userPassword.concat(lowerCasedCharacters); // then access lowerCasedCharacters array with possibly with "Math.random().toString(36).slice(2, 10)" from StackOverflow (https://stackoverflow.com/questions/1497481/javascript-password-generator)
  // alert("Your password will feature lowercase letters.");

} else if (confirm == false) {
  alert("Your password won't contain any lowercase letters.");
  console.log(RandomLowerString);
}
console.log("Lowercase chosen: " + passLowerCase);

// Alert to choose Upper Case

var passUpperCase = confirm("Should your password contain uppercase characters?");

if (confirm == true) {
  // userPassword.concat(upperCasedCharacters);

  // function getRandomUpper(passwordLength) {
  //   var RandomUpperString = []
  //   return Math.floor(Math.random() * passwordLength); // I've tried to create a string of random items per prompt, but don't think this works - or is necessary as it can be executed further down in another function.
  // }

  // var upperPassword = upperCasedCharacters[Math.floor(Math.random() * passwordLength)];

} else if (confirm == false) {
  alert("Your password won't contain any uppercase letters.")
}
console.log("Uppercase chosen: " + passUpperCase);

// Alert to choose numbers.

var passNumerals = confirm("Should your password contain numbers?");

if (confirm == true) {
  // var numberPassword = numericCharacters[Math.floor(Math.random() * passwordLength)];
  // // then access upperCasedCharacters array with possibly with "Math.random().toString(36).slice(2, 10)" from StackOverflow (https://stackoverflow.com/questions/1497481/javascript-password-generator)
  // alert("Your password will feature uppercase letters.")
} else if (confirm == false) {
  alert("Your password won't contain any numbers.")
}
console.log("Numerals chosen?: " + passNumerals);
// console.log(numberPassword);

// Alert to choose special characters.

var passSpecial = confirm("Should your password contain any special characters?");

if (confirm == true) {
  // for (var i = 0; i < passwordLength.length; i++) {
  //   var specialPasswordValue = specialCharacters[Math.floor(Math.random() * passwordLength)];
  // }
  // then access upperCasedCharacters array with possibly with "Math.random().toString(36).slice(2, 10)" from StackOverflow (https://stackoverflow.com/questions/1497481/javascript-password-generator)
  // alert("Your password will feature uppercase letters.")
} else if (confirm == false) {
  alert("Your password won't contain any special characters.")
  console.log(specialPassword);
}

console.log("Special characters chosen?: " + passSpecial);

// Code to check if at least one type of character was chosen to create a password.

if ([passLowerCase, passUpperCase, passNumerals, passSpecial].some(item => item)) {
  alert("Your selection is valid.")
} else {
  alert("Your selection is invalid. Please reload the page and start again.")
}
console.log("Password selection complete.");


// Function for getting a random element from an array
function getRandom(arr) {
  var PasswordValue = [Math.floor(Math.random() * passwordLength)];
  return arr[PasswordValue];
}

// Function to generate password with user input
function generatePassword() {

  var options = userPassOptions();
  var password = [];
  var userSelection = [];

  if (options.passLowerCase) {
    password.push(getRandom(lowerCasedCharacters));
    userSelection.push(lowerCasedCharacters);
  }

  if (options.passUpperCase) {
    password.push(getRandom(upperCasedCharacters));
    userSelection.push(upperCasedCharacters);
  }

  if (options.passNumerals) {
    password.push(getRandom(numericCharacters));
    userSelection.push(numericCharacters);
  }

  if (options.specialCase) {
    password.push(getRandom(specialCharacters));
    userSelection.push(specialCharacters);
  }

  for (var i = password.length; i < options.passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * userSelection.length);

    password.push(getRandom(userSelection[PasswordValue]));
  }

  return password.join("");
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