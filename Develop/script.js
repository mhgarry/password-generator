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

//fixed JS on all branches
//Assignment Code

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

//prompt user to pick character types for password and length of password as well as gens password
function generatePassword(){
    //user prompts 
    var addNumbers = confirm('Click OK to add numbers to your password')
    var addLower = confirm('Click OK to add lowercase letters to your password')
    var addUpper = confirm('Click OK to add uppercase letters to your password')
    var addSpecialChars = confirm('Click OK to add special characters to your password')
    var passwordLength = prompt("Pick a number between 8 and 128 for your password length")
  
  
  
  //character arrays
  numbers = ['0','1','2','3','4','5','6','7','8','9']
  lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  special = ['~','!','@','#','$','%','^','&','*','(',')','_','-','+','=']
  //adds values array "options" based on user prompts
  var options = []
  if (addNumbers) {
    options = options.concat(numbers)}
  if (addLower) {
    options = options.concat(lower)
    }
  if (addUpper) {
    options = options.concat(upper)
    }
  if (addSpecialChars) {
    options = options.concat(special) 
    } 
  //so that the user must pick a character before proceeding with reference from https://stackoverflow.com/questions/64378165/why-is-my-password-returning-as-undefined
  if (options.length == 0) {
    alert('Please chose a character to put in your password')
    }
  //will not generate password if the password length is less than 8 or greater than 128
   if (passwordLength < 8 || passwordLength > 128){
    passwordLength = false
    }
  //a container for our final string
  var random =''
  //loop to calculate password length 
  for(i = 0; i < passwordLength; i++) {
    var allOptions = Math.floor(Math.random() * options.length)
    var randomElement = options [allOptions]
  
    random += (randomElement)
  }
  //returns our generated password to our function and passes it to write password function which allows user to see password in box
  return random
  }
  //writes password and returns it to writePassword function
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)
  //event listener is prompted by the writePassword function sucsesfully running to be put in the password box on our webpage