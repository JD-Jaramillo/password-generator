// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword() {
    console.log("generate password function ran");
    var passwordLength = prompt("How long do you want your password to be? Please choose a number between 8 and 128");
    console.log(passwordLength, "passwordlength is working");
    // console.log('passwordLength.length', passwordLength.length);

    // This is an array
    var specialCharacterArray = ["!", "$", "&", "#", "*"];
    var uppercaseLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercaseLetterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let characterOptionsArray = [];

    let uppercaseLetters;
    let lowercaseLetters;
    let specialCharacters;

    if (passwordLength < 8 || passwordLength > 128) {
        alert('please start over with 8-128');
    } else if (passwordLength >= 8 && passwordLength < 129) {
        console.log("The number entered is valid");


        let uppercaseLetters = confirm("Great, now do you want to use uppercase letters? ");
        if (uppercaseLetters) {
            characterOptionsArray = characterOptionsArray.concat(uppercaseLetterArray);

        } // end of  if (uppercaseLetters)


        let lowercaseLetters = confirm("Great, now do you want to use lowercase letters? ");
        if (lowercaseLetters) {
            characterOptionsArray = characterOptionsArray.concat(lowercaseLetterArray);
        }// end of  if (lowercaseLetters)

        let specialCharacters = confirm("Great, now do you want to use special characters letters? ");
        if (specialCharacters) {
            characterOptionsArray = characterOptionsArray.concat(specialCharacterArray);
        } // end of  if (specialCharacters)

    } // end of lse if (passwordLength >= 8 && passwordLength < 129)

    let password = "";

    for (i = 1; i <= passwordLength; i++) {
        // generate random number to use as the index for what key to tgrab in characterOptionsArray
        // console.log('characterOptionsArray.length', characterOptionsArray.length);
        let randomNumberToUseAsIndex = (Math.floor(Math.random() * characterOptionsArray.length) + 1);
        // console.log('THIS IS THE RANDOM NUMBER INDEX', randomNumberToUseAsIndex)
        password += characterOptionsArray[randomNumberToUseAsIndex];
        console.log(password, "this is password wiht random number");
    }

    return password;

} // end of generatePassword()
// this function needs to return the password (generatePassword = "string")


// Write password to the #password input
function writePassword() {
    console.log('write password');
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log("the function is working, password is being generated")
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);






writePassword();