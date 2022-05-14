// Assignment Code
var passwordLengthInput = document.getElementById("password-length");
var lowerCaseInput = document.getElementById("lower-case");
var upperCaseInput = document.getElementById("upper-case");
var numericInput = document.getElementById("numeric")
var specialCharInput = document.getElementById("special-char");
var generateBtn = document.querySelector("#generate");

//use .checked for checkbox elements

const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '1234567890';
const specialChars = "@%+\/'!#$^?:,(){}[]~`-_.";

let passwordObj = {
  pLength: 0,
  lowerCase: false,
  upperCase: false,
  numeric: false,
  specialChar: false,
}

let passwordArray = "";

// Write password to the #password input
function writePassword() {
  //check password length
  if(passwordLengthInput.value <= 128 && passwordLengthInput.value >= 8) {
    //valid password length, set length in object
    passwordObj.pLength = passwordLengthInput.value;
  }
  else {
    //give error
    alert("Invalid password length");
    return;
  }

  //check if any are checked
  if(lowerCaseInput.checked || upperCaseInput.checked || numericInput.checked || specialCharInput.checked) {
    //at least one checked, set parameters in object
    passwordObj.lowerCase = lowerCaseInput.checked;
    passwordObj.upperCase = upperCaseInput.checked;
    passwordObj.numeric = numericInput.checked;
    passwordObj.specialChar = specialCharInput.checked;
  }
  else {
    //give error, need at least one checked
    alert("Please check at least one parameter");
    return;
  }

  //generate password, display to screen
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

  //reset parameters
  passwordObj.pLength = 0;
  passwordObj.lowerCase = false;
  passwordObj.upperCase = false;
  passwordObj.numeric = false;
  passwordObj.specialChar = false;
  //reset password array
  passwordArray = "";
}

function generatePassword() {
  //combine arrays for possible chars in password
  if(passwordObj.lowerCase) {
    passwordArray += lowerChars;
  }
  if(passwordObj.upperCase) {
    passwordArray += upperChars;
  }
  if(passwordObj.numeric) {
    passwordArray += numericChars;
  }
  if(passwordObj.specialChar) {
    passwordArray += specialChars;
  }
  //get length of array
  let l = passwordArray.length;
  let password = "";  //initialize password string
  let rand = 0; //initialize random index variable

  //for each character in the output password (based on input length)
  for(let i=0; i<passwordObj.pLength; i++) {
    rand = Math.floor(Math.random()*l); //random index from 0 to length of array - 1
    password += passwordArray[rand];  //add character to output password
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
