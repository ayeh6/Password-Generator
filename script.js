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
  if(passwordLengthInput.value <= 128 && passwordLengthInput.value >= 8) {
    //valid password length
    passwordObj.pLength = passwordLengthInput.value;
  }
  else {
    //give error
    alert("Invalid password length");
    return;
  }

  if(lowerCaseInput.checked || upperCaseInput.checked || numericInput.checked || specialCharInput.checked) {
    //at least one checked
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

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  passwordObj.pLength = 0;
  passwordObj.lowerCase = false;
  passwordObj.upperCase = false;
  passwordObj.numeric = false;
  passwordObj.specialChar = false;
  passwordArray = "";
}

function generatePassword() {
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
  let l = passwordArray.length;
  let password = "";
  let rand = 0;
  for(let i=0; i<passwordObj.pLength; i++) {
    rand = Math.floor(Math.random()*l);
    password += passwordArray[rand];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
