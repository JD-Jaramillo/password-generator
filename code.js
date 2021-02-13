// Assignment Code
var generateBtn = document.querySelector("#generate");



function myFunction() {
    console.log('my function ran');
}
function generatePassword() {
    console.log("generate password function ran");
    var passwordLength = prompt("How long do you want your password to be? Please choose a number between 8 and 128");

    // console.log('passwordLength.length', passwordLength.length);

    // This is an array
    var specialCharacterArray = ["!", "$", "&", "#", "*"];
    var uppercaseLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercaseLetterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    if (passwordLength < 8 || passwordLength > 128) {
        alert('please start over with 8-128');
    } else if (passwordLength >= 8 && passwordLength < 129) {
        console.log("The number entered is valid");
        var uppercaseLetters = confirm("Great, now do you want to use uppercase letters? ");
        console.log("UpperCse leter", uppercaseLetters);
        var lowercaseLetters = confirm("Do you want a lowercaseLetter?");
        console.log("lowercase letters", lowercaseLetters);
        var specialCharacters = confirm("Do you want special characters?");
        console.log("special characters", specialCharacters);
    }

    // if (passwordLength >= 8 && passwordLength <= 128) {
    //   console.log("its long enough");
    //   console.log('PASSWORDLENGTH', passwordLength);
    //   return passwordLength;
    // } else {
    //   var passwordLength = prompt("Icorrect answer, try again");
    //   console.log('second time around in else', passwordLength);
    //   console.log("It's not long enugh");
    //   return passwordLength;
    // }


    // console.log('passwordLength', passwordLength);

}
// this function needs to return the password (generatePassword = "string")


// Write password to the #password input
function writePassword() {
    console.log('write password');
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log("the function is working, where off to a good start")
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);






// writePassword();