// Assignment Code

//user is an employee who needs to generate a password meeting certain criteria for storing sensitive data
//user needs a new secure password 

//the password criteria is as follows
//1. password must be between 8 and 128 characters
//2a passwrod may contain lowercase letters
//2b. password may contain uppercase letters
//2c. password may contain special characters
//2d. password may contain numbers 
//3. password must contain at least one of the above character types
//4. password must be between 8 and 128 characters

//we will solve this problem by creating a password generator 
//1. we will prompt the user to select which characters they would like in their password when
//they press "generate" button and log it
//1a. we will make sure the user chooses at least one character type 
//2. we will prompt the user to type in the length of their password (between 8 and 128 characters)
//and log that information
//3. we will pass the selected logged selected characters (values) and selected length
//of the password into a funtion that generates a password (object)
//4. we will display the password(object) to the user
// helped me understand how to tackle this problem and write
//psuedo code

//redo on new branch
//Assignment Code

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


//we will pass the function gnerate password into the write password fusnction
//we will output into #password generating our password

//we will pass the function gnerate password into the write password function
//we will output into #password generating our password
var generateBtn = document.querySelector("#generate")

return password
function writePassword(optionsObj = options) {
    var lower = ["abcdefghijklnmopqrstuvwxyz".split("")]
    var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")]
    var nums = ["0123456789".split("")]
    var special = ["~!@#$%^&*()-_=+".split("")]
    
    
    var userInput = []
    var charList = []
    
    
    var randomSelection = function (arr) {
        var random = charList[Math.floor(Math.random() *
        arr.length)] 
    
    if (charList.includes(random)) {
        return randomSelection(arr)
    }
    return randomSelection
    }
    
    //uses arrays for user choice
    if (optionsObj.lower) {
        userInput = userInput.concat(lower)
    }
    
    if (optionsObj.upper) {
        userInput = userInput.concat(upper)
    }
    
    if (optionsObj.nums) {
        userInput = userInput.concat(nums)
    }
    
    if (optionsObj.special) {
        userInput = userInput.concat(special)
    //for loop for amount
        for ( var i = 8; i < optionsObj.amount; i++) { 
            var random = randomSelection(charList) }
            charList.push(random)
    }
    generatePassword(charList)

    var passwordText = document.querySelector("#password")
    var password = passwordText
    passwordText.value = password

}
//writes password and returns it to writePassword function

// Add event listener to generate button
