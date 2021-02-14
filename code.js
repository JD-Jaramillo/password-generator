// Assignment Code
let generateBtn = document.querySelector("#generate");

// Moved this function up above the generatepassword 
// this function needs to return the password (generatePassword = "string")
function generatePassword() {
    console.log("generate password function ran");
    var passwordLength = prompt("How long do you want your password to be? Please choose a number between 8 and 128");
    console.log(passwordLength, "passwordlength is working");
    // console.log('passwordLength.length', passwordLength.length);

    // These are the arrays for the user character selections, these will be used to generate the password 
    var specialCharacterArray = ["*", "$", "&", "%", "#", "@", "?", "/", "_"];
    var uppercaseLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercaseLetterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let characterOptionsArray = [];

    let uppercaseLetters;
    let lowercaseLetters;
    let specialCharacters;

    // This is what makes sure the user's input is a length greater than 8 and less then 129
    if (passwordLength < 8 || passwordLength > 128) {
        alert('please start over with a length between 8-128');
    } else if (passwordLength >= 8 && passwordLength < 129) {
        console.log("The number entered is valid");

        //  This is asking the user to confirm if they want to use uppercase letters, if they do then the uppercase letters array is added/concated to the character options array (if they don't the array won't be added)
        let uppercaseLetters = confirm("Great, now do you want to use uppercase letters? ");
        if (uppercaseLetters) {
            characterOptionsArray = characterOptionsArray.concat(uppercaseLetterArray);

        } // end of  if (uppercaseLetters)

        //  This is asking the user to confirm if they want to use lowercase letters, if they do then the lowercase letters array is added/concated to the character options array (if they don't the array won't be added)
        let lowercaseLetters = confirm("Great, now do you want to use lowercase letters? ");
        if (lowercaseLetters) {
            characterOptionsArray = characterOptionsArray.concat(lowercaseLetterArray);
        }// end of  if (lowercaseLetters)

        //  This is asking the user to confirm if they want to use special characters, if they do then the special characters array is added/concated to the character options array (if they don't the array won't be added)
        let specialCharacters = confirm("Great, now do you want to use special characters letters? ");
        if (specialCharacters) {
            // characterOptionsArray = characterOptionsArray.concat(meh);

            characterOptionsArray = characterOptionsArray.concat(specialCharacterArray);
        } // end of  if (specialCharacters)

    } // end of else if (passwordLength >= 8 && passwordLength < 129)

    // This is the varaiable that will become our password
    let password = "";

    // This is what is looping us based on the length of the password that the user wants through the character options array in order to formulate our password 

    for (i = 1; i <= passwordLength; i++) {
        // generate random number to use as the index for what key to grab in characterOptionsArray
        let randomNumberToUseAsIndex = (Math.floor(Math.random() * characterOptionsArray.length) + 1);
        let candidateKey = characterOptionsArray[randomNumberToUseAsIndex];

        // if the array returned undefined, try going through it again
        if (typeof candidateKey === 'undefined') {
            console.log('this was undef');
            let randomNumberToUseAsIndex = (Math.floor(Math.random() * characterOptionsArray.length) + 1);
            password += characterOptionsArray[randomNumberToUseAsIndex];
        }

        // if it returned a good key, add it to the password
        else {
            password += candidateKey;
        }
    }

    // This returns the password variable to the top of the function 
    return password;

} // end of generatePassword()



// This function writes the password in the text area 
function writePassword() {
    console.log('write password function generated');
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log("the function is working, password is being generated")
    passwordText.value = password;

}

// This event listener is added to generate button so that it will activate upon the users click
generateBtn.addEventListener("click", generatePassword);

// This inititates the above function to write password, which then in turn triggers the generate password function at the top 
writePassword();  