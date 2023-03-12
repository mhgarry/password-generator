//array for uppercase, lowercase, numbers, and special characters that users can use in their password
var charString = {"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz", "0123456789", "~!@#$%^&*()_-=+[{]}/?!><"}

//array to store the user's inputs
var userCharacters = []

// password geneartes inside
var password = ""

var generateBtn = document.querySelector("#generate")

//write password to the #password input
function writePassword() {
  //runs the generate password function and assigns the result to the password value
  password = generatePassword
  var password = document.querySelector("password")

  passwordText.value = password
}

//function that generates password and prompts character length and then passes into the write password function
function generatePassword() {
    var passwordLength = 0
    //created a while loop to generate password length as well as prompt user to type in their specified length
    while ((passwordLength < 8 || passwordLength > 128 || Number.isInteger(passwordLength === false) {
            passwordLength = parseInt(prompt("How long do you want your password to be?..must be a number between 8 and 128")
    }))
}


  

//made function to generate the password
function generatePassword (optionsObj){
    //if statement saying if user picks certain prompts to user the arrays above to select characers genned
    if (optionsObj.lower) {
      characterChoices = characterChoices.concat(lower)
    }

    if (optionsObj.up) {
      characterChoices = characterChoices.concat(up)
    }
    if (optionsObj.special) {
      characterChoices = characterChoices.concat(special)
    }
    if (optionsObj.num) {
      characterChoices = characterChoices.concat(num)
    }
    
    for (var i = 8; i <= optionsObj.amount; i++) {
      var randomSelection = characterChoices[Math.floor(Math.random() * 
        characterChoices.length)]

        characterList.push(randomSelection)
    }
    generatePassword(characterList)

}

   //where i want to be and where i want the password to generate
   
  
//added confirms for lowercase, numeric, uppercase, and special characters to ask the user
//to pick which options they want. Also added a prompt asking the user to choose a number
//between 8 and 128 for thier password lentgh
//since the prompt is a string i have to convert the string into a interger which 
//i did with the parseInit function
function writePassword() {
 
  
  
  

  var lowercase = confirm("Would you like to include lowercase letters in your password?")
  var uppercase = confirm("Would you like to inclue uppercase letters in your password?")
  var numbers = confirm("Would you like to include numbers in your password?")
  var specialChar = confirm("Would you like to include special characters in your password?")
  var passwordLength = prompt('Choose a password length: Must be at least 8 characters and no greater than 128 characters')
  var parsedAmount = parseInt(passwordLength)

  var options = {
    lower: lowercase,
    up: uppercase,
    num: numbers,
    special: specialChar,
    amount: parsedAmount,
  
  }
  
  
  generatePassword(options)
 
}
 //tested my passwordText options box and user prompts with console.log(passwordText) and 
 //my userprompts and functions worked as intended



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)