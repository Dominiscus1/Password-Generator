console.log("script2 loaded correctly")
var generatePasswordButton = document.getElementById("generate");


function generatePassword(){
    //All possible string the password could be made of
    var specialCharstr ="~`!@#$%^&*()_-+=";
    var upperCaseLetterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseLetterStr = "abcdefghijklmnopqrstuvwxyz";
    var numberStr = "0123456789";
    //Turn the strings into Arrays so that we can pull individual
    //characters out of the strings for the password randomly
    var specialCharArr = specialCharStr.split("");
    var upperCaseLetterArr = upperCaseLetterStr.split("");
    var lowerCaseLetterArr = lowerCaseLetterStr.split("");
    var numberArr = numberStr.split("");


}

function writePassword(){
    var password = generatePassword();//Hands over password from generate Password function
    var passwordTextEl = document.getElementById("password");

    passwordTextEl.value = password;
    return;
}

generatePasswordButton.addEventListener("click", writePassword);