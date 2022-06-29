// Assignment code here
var specialCharacters = [
    "!", "@", "#", "$", "%", "^", "&", "*"
  ]
  var numericCharacters = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
  ]
  
  var lowerCasedCharacters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ]
  
  var upperCasedCharacters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
  
  function getPasswordOptions () {
    var length = parseInt(prompt("How many characters would you like in your password?", 10));
    if(Number.isNaN(length)){
      alert("Password length must be a number")
    }
    if(length < 8) {
      alert("Password must be at least 8 characters")
    }
    if(length > 120) {
      alert("Password cannot be longer than 120 characters")
    }
  
    var hasSpecialCharacters = confirm(
      "Click okay to confirm you would like to include special characters!"
    )
    var hasNumericCharacters = confirm(
      "Click okay to confirm you would like to include numeric characters!"
    )
    var hasLowerCasedCharacters = confirm(
      "Click okay to confirm you would like to include lower cased characters!"
    )
    var hasUpperCasedCharacters = confirm(
      "Click okay to confirm you would like to include upper cased characters!"
    )
  
    if(hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false
      ) {
        alert("Must select at least one character type!")
      }
  
      var passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters, hasUpperCasedCharacters
      }
  
      return passwordOptions;
  }
  
  function getRandom(arr){
    var randomIndex = Math.floor(Math.random()* arr.length);
    var randElement = arr[randomIndex];
    return randElement;
  }
  
  function generatePassword() {
    var options = getPasswordOptions();
    var results = []
  
    var possibleCharacters = []
  
    var guaranteedCharacters = []
  
    if(!options) return null;
  
    if(options.hasSpecialCharacters){
      possibleCharacters = possibleCharacters.concat(specialCharacters)
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
    if(options.hasNumericCharacters){
      possibleCharacters = possibleCharacters.concat(numericCharacters)
      guaranteedCharacters.push(getRandom(numericCharacters));
    }
    if(options.hasLowerCasedCharacters){
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
    if(options.hasUpperCasedCharacters){
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
    
    for(var index =0; index < options.length; index++) {
      var possibleCharacters = getRandom(possibleCharacters);
  
      results.push(possibleCharacters);
    }
  
    for(var index =0; index < guaranteedCharacters.length; index++){
      results[index] = guaranteedCharacters[index];
    }
  
    return results.join("")
  }
  
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
  