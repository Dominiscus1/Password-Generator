//DATA
var generatePasswordButton = document.getElementById("generate");

//Character sets to choose for password
//Numberic character set
// upper case alphabets
// lower case alphabets
// numeric character set
var specialCharStr ="~`!@$%^&*()_+=-";
var upperCaseLetterStr ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numbersStr = "0123456789";

var specialCharArr = specialCharStr.split("");
var upperCaseCharArr = upperCaseLetterStr.split("");
var lowerCaseCharArr = lowerCaseChars.split("");
var numbersArr = numbersStr.split("");

// var specialChars = "!@#$%^&*()_+".split("");
// console.log(specialChars);

//User choices of length,special chars, upper case, Lower case alphabets ,numeric chars
//Store user choces to variables
var userChoiceSpecialChars = confirm("special Characters?");
console.log(userChoiceSpecialChars);

var userChoiceUpperCase = confirm("Upper case?");
console.log(userChoiceUpperCase);

var userChoiceLowerCase = confirm("Lower Case?");
console.log(userChoiceLowerCase);

var userChoiceNumbers = confirm("Numbers?");
console.log(userChoiceNumbers);

//function generatePassword(){} wrap all in this function?
var userChoiceLength = prompt("Enter password length: ");
console.log(userChoiceLength);

if(userChoiceLength <8 || userChoiceLength > 128){
//prompt confirm alert
//prompt askes for input
//confirm asks user to click yes or no
//alert tells user a message.
alert("Password must be between 8 and 128 characters"); // lets them reenter a new amount for password length
    //return generatePassword();

}
if(!userChoiceSpecialChars && !userChoiceLowerCase && !userChoiceUpperCase && !userChoiceNumbers){
    alert("You must choose at least one set of characters");
    return generatePasswordButton();
}






//Create a pool of character sets of user choices
var userCharPool =[];

if(userChoiceSpecialChars){
    userCharPool = userCharPool.concat(specialCharArr);
}
if(userChoiceNumbers){
    userCharPool = userCharPool.concat(numbersArr);
}

// arrPassword= [];
var myPassword = "";//Will containt our password once its pushed from below

for(var i = 0; i < userChoiceLength; i++){// loops through enough time to fill the arr
    var index = Math.floor(Math.random() * userCharPool.length); //0-9
    //It will pull characters from the pool that was created
    // arrPassword.push(userCharPool[index]);//pushes the random leters to the password arr
    // myPassword = myPassword + userCharPool[index];
    myPassword += userCharPool[index];
}
return myPassword; // returns the generated password

// var myArr =['a', 'b', 'c', '1']; //copies myArr to empty userCharPool array
// // for(var i = 0; i< myArr.length; i++){
// //     userCharPool.push(myArr[i]);
// // }
// // console.log(userCharPool);
// // //alternately
// // function copyArrayPool(arr){
// //     for(var i = 0; i< myArr.length;i++){
// //         userCharPool.push(arr[i]);
// //     }
// //     console.log(userCharPool);
// //     return;
// // }
// // copyArrayPool(myArr);
// // copyArrayPool('1','2','3','4');

// if(userChoiceSpecialChars){
//     copyArrayPool(specialCharArr)
//}
//if for all the options because they can all be true

//Main process
function writePassword(){
    var password = generatePassword();//handed password from generate password
    var passwordTextEl = document.getElementById("password");

    passwordTextEl.value = password;

    return;
}

