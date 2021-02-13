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
            console.log('upercase letters true');
            characterOptionsArray = characterOptionsArray.concat(uppercaseLetterArray);
            console.log('characterOptionsArray array', characterOptionsArray);
        }
        // return uppercaseLetters;
        // console.log("UpperCse leter", uppercaseLetters);
        // let lowercaseLetters = confirm("Do you want a lowercaseLetter?");
        // console.log("lowercase letters", lowercaseLetters);
        // let specialCharacters = confirm("Do you want special characters?");
        // console.log("special characters", specialCharacters);

    }

    let password = "";

    if (uppercaseLetters) {
        console.log("this is working now ");
    }
    console.log('meh2');

    for (i = 1; i <= passwordLength; i++) {
        // generate random number to use as the index for what key to tgrab in characterOptionsArray
        console.log('characterOptionsArray.length', characterOptionsArray.length);
        let randomNumberToUseAsIndex = (Math.floor(Math.random() * characterOptionsArray.length) + 1);
        console.log('THIS IS THE RANDOM NUMBER INDEX', randomNumberToUseAsIndex)
        password += characterOptionsArray[randomNumberToUseAsIndex];
        console.log(password, "this is password wiht random number");
    }



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