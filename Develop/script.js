var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower = 'abcdefghijklmnopqrstuvwxyz'
var numeric = '0123456789'
var special = '!@#$%^&*()_+=~}{'
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    
    var guaranteedCharacters = '';
    var possibleCharacters = '';
    
    var passwordLength = window.prompt('Choose how long you want your password to be. Input a number (Digits only please) between 8 - 129:');
    console.log(passwordLength);
    
    if(!passwordLength){
        return;
    }
    
    if (isNaN(passwordLength)) {
        window.alert('Not a Number!'); 
        return;
      }

    while(passwordLength < 8 || passwordLength > 129 || passwordLength == NaN) {
        var passwordLength = window.prompt('Length must be a number. Choose password length between 8 - 129:');
    }

    var hasNumericCharacters = confirm('Would you like numeric values?');
    var hasLowerCharacters = confirm('Would you like lowercase values?');
    var hasUpperCharacters = confirm('Would you like UPPERCASE letters?');
    var hasSpecialCharacters = confirm('Would you like special characters?');

    if (!hasNumericCharacters && !hasLowerCharacters && !hasUpperCharacters && !hasSpecialCharacters) {
                var hasNumericCharacters = alert('Password must contain characters. Please try again.');
           }

    if(
        hasNumericCharacters &&
        hasLowerCharacters &&
        hasUpperCharacters &&
        hasSpecialCharacters
        )
        {
         possibleCharacters = possibleCharacters.concat(numeric, lower, upper, special);
         console.log(possibleCharacters);
    } else if (
        hasLowerCharacters &&
        hasUpperCharacters &&
        hasSpecialCharacters
        )
        {
            var assuredLower = guaranteedCharacters.concat(getRandom(1, lower));
            var assuredUpper = guaranteedCharacters.concat(getRandom(1, upper));
            var assuredSpecial = guaranteedCharacters.concat(getRandom(1, special));

            console.log(assuredLower.length);
            console.log(assuredUpper.length);
            console.log(assuredSpecial.length);
            console.log(guaranteedCharacters);
    } else if (
        hasUpperCharacters &&
        hasSpecialCharacters
        )
        {
        possibleCharacters = possibleCharacters.concat(upper, special);
        console.log(possibleCharacters);
    } else if (
        hasLowerCharacters &&
        hasSpecialCharacters
        )
        {
        possibleCharacters = possibleCharacters.concat(lower, special);
        console.log(possibleCharacters);
    } else if (
        hasLowerCharacters &&
        hasUpperCharacters
        )
        {
        possibleCharacters = possibleCharacters.concat(lower, upper);
        console.log(possibleCharacters);
    } else if (
        hasLowerCharacters &&
        hasNumericCharacters
        )
        {
        possibleCharacters = possibleCharacters.concat(lower, numeric);
        console.log(possibleCharacters);
    } else if (
        hasNumericCharacters &&
        hasSpecialCharacters
        )
        {
        possibleCharacters = possibleCharacters.concat(numeric, special);
        console.log(possibleCharacters);
    } else if (
        hasNumericCharacters &&
        hasSpecialCharacters
        )
        {
        possibleCharacters = possibleCharacters.concat(numeric, special);
        console.log(possibleCharacters);
    } else if (hasLowerCharacters){
        possibleCharacters = possibleCharacters.concat(lower);
        console.log(possibleCharacters);
    } else if (hasUpperCharacters){
        possibleCharacters = possibleCharacters.concat(upper);
        console.log(possibleCharacters);
    } else if (hasNumericCharacters){
        possibleCharacters = possibleCharacters.concat(numeric);
        console.log(possibleCharacters);
    } else if (hasSpecialCharacters){
        possibleCharacters = possibleCharacters.concat(special);
        console.log(possibleCharacters);
    }
    if (guaranteedCharacters.length < passwordLength){
        getRandom(passwordLength - guaranteedCharacters.length, guaranteedCharacters);
        console.log('test');
        console.log(guaranteedCharacters.length);
    }

function getRandom(x, y){
        for(i = 0; i < x; i++){
        var index = Math.floor(Math.random() * y.length);
        var char = y.charAt(index);
        console.log(guaranteedCharacters);
        guaranteedCharacters = guaranteedCharacters += char;
    }
} 
    getRandom(passwordLength, possibleCharacters);
    console.log(guaranteedCharacters);
    document.getElementById("password").value = guaranteedCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
