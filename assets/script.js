document.addEventListener('DOMContentLoaded', function () { // loads the JS code after the HTML CSS is rendered
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

  // Initialize a flag to keep track if prompts have been shown so if button is clicked again prompts don't show up again
  var promptsShown = false;

  // Initialize userOptions variable
  var userOptions = {
    passwordLength: 0,
    passLowerCase: true,
    passUpperCase: true,
    numberCase: true,
    specialCase: true,
  };

  // Function to prompt user for password userOptions
  function userPassUserOptions() {
    // Check if prompts have already been shown
    if (!promptsShown) {
      // Input to choose password length.
      while (isNaN(userOptions.passwordLength) || userOptions.passwordLength < 10 || userOptions.passwordLength > 64) { // and to make sure input isn't anything but a number
        var passwordLengthInput = prompt("Choose the length of your password. (10 - 64 characters)");
  
        if (passwordLengthInput === null) { // user clicked cancel return to 'start' screen
          userOptions = {
            passwordLength: 0,
            passLowerCase: true,
            passUpperCase: true,
            numberCase: true,
            specialCase: true,
          };
          promptsShown = false;
          return;
        }
  
        userOptions.passwordLength = parseInt(passwordLengthInput);
  
        if (isNaN(userOptions.passwordLength)) {
          alert("Invalid input. Please enter a valid number.");
        }
      }
  
      console.log("Password length chosen: " + userOptions.passwordLength);
  
      let chosen = false;
  
      while (!chosen){
  
      // Alert to choose Lower Case
      userOptions.passLowerCase = confirm("Should your password contain lowercase characters?");
      console.log("Lowercase chosen: " + userOptions.passLowerCase);
  
      // Alert to choose Upper Case
      userOptions.passUpperCase = confirm("Should your password contain uppercase characters?");
      console.log("Uppercase chosen: " + userOptions.passUpperCase);
  
      // Alert to choose numbers.
      userOptions.numberCase = confirm("Should your password contain numeric characters?");
      console.log("Numeric chosen: " + userOptions.numberCase);
  
      // Alert to choose special characters.
      userOptions.specialCase = confirm("Should your password contain special characters?");
      console.log("Special characters chosen: " + userOptions.specialCase);
  
      if (!userOptions.passLowerCase && !userOptions.passUpperCase && !userOptions.numberCase && !userOptions.specialCase) {
        alert("Please choose at least one character type.")
      } else {
        chosen = true;
      }
    }
  
      // Set promptsShown flag to true
      promptsShown = true;
    }
  }
  

    // Function to generate password
    function generatePassword() {
      // Call userPassUserOptions function to get password userOptions from user
      userPassUserOptions();

      // Initialize password variable
      var password = "";

      // Create an array to store all the characters that the user wants to include in the password
      var characters = [];

      // Concatenate the arrays that the user wants to include in the password based on their input
      if (userOptions.passLowerCase) {
        characters = characters.concat(lowerCasedCharacters);
      }

      if (userOptions.passUpperCase) {
        characters = characters.concat(upperCasedCharacters);
      }

      if (userOptions.numberCase) {
        characters = characters.concat(numericCharacters);
      }

      if (userOptions.specialCase) {
        characters = characters.concat(specialCharacters);
      }

      // Loop through the characters array to randomly select characters to include in the password
      for (var i = 0; i < userOptions.passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }

      // Return the generated password
      return password;

    }

    // Select the button element and add a click event listener to it
    var generateBtn = document.querySelector("#generate");

    generateBtn.addEventListener("click", function () {
      // Select the text area element
      var passwordText = document.querySelector("#password");

      // Generate a password and set it as the value of the text area
      passwordText.value = generatePassword();

    });
  });