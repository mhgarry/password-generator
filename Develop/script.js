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
//https://www.youtube.com/watch?v=x4HUaiazDes helped me understand how to tackle this problem and write
//psuedo code

//we made arrays for the variables to input into character selection and password length functions
//code from https://stackoverflow.com/questions/64629120/random-password-generator-using used
var string = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), "abcdefghijklnmopqrstuvwxyz".split(""), "0123456789".split("")
, "~!@#$%^&*()-_=+".split("")];
//split each string into individual strings using .split("") idea from https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-the-alphabet

//made arrays using Array.from(string) to get our 4 seperate arrays
//got arry.from function from https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
var usingArrayFrom = Array.from (string)
console.log(usingArrayFrom)

var userInput = [];

//we made password into a variable so we can plug in to function to output password
var password = ""

var generateBtn = document.querySelector("#generate");

//we will pass the function gnerate password into the write password function
//we will output into #password generating our password



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);