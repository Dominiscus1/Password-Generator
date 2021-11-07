console.log("script2 loaded correctly")
var generatePasswordButton = document.getElementById("generate");


function generatePassword() {
    //All possible string the password could be made of
    var specialCharStr = "~`!@#$%^&*()_-+=";
    var upperCaseLetterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseLetterStr = "abcdefghijklmnopqrstuvwxyz";
    var numberStr = "0123456789";
    //Turn the strings into Arrays so that we can pull individual
    //characters out of the strings for the password randomly
    var specialCharArr = specialCharStr.split("");
    var upperCaseLetterArr = upperCaseLetterStr.split("");
    var lowerCaseLetterArr = lowerCaseLetterStr.split("");
    var numberArr = numberStr.split("");

    //create variables for storing the user choices
    //Ask user to enter desired password length
    var userChoiceLength = prompt("Enter password length");
    console.log(userChoiceLength);
    //create an alert that will tell them to choose a length between 8 and 128
    if (userChoiceLength < 8 || userChoiceLength > 128) {
        alert("Password must be between 8 and 128 in length");
        return generatePassword();
    }
    var userChoiceSpecialChar = confirm("Do you want special Characters?");
    console.log(userChoiceSpecialChar);
    var userChoiceUpperCase = confirm("Do you want upper case Characters?");
    console.log(userChoiceUpperCase);
    var userChoiceLowerCase = confirm("Do you want lower Characters?");
    console.log(userChoiceLowerCase);
    var userChoiceNumbers = confirm("Do you want number Characters?");
    console.log(userChoiceNumbers);

    //Make sure the user picks at least one type of character group
    if(!userChoiceSpecialChar && !userChoiceUpperCase && !userChoiceLowerCase && !userChoiceNumbers){
        alert("You must choose at least one set of characters");
        return generatePassword();
    }
}

function writePassword() {
    var password = generatePassword();//Hands over password from generate Password function
    var passwordTextEl = document.getElementById("password");

    passwordTextEl.value = password;
    return;
}

//Added the event listener so that Generate will call write password
generatePasswordButton.addEventListener("click", writePassword);