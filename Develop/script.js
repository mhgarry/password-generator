// Assignment Code
//added var password = document.querySelector("#password") to top for easier reference
var generateBtn = document.querySelector('#generate')
var writePassword = document.querySelector('#passwords')

//for loop to create numbers array between 8 and 128

console.log(writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function to put arguments in to generate our password
function writePassword(characterObj) {
  //created arrays for lowercase letter, uppercase letters, and special characters to be used in the generation of password
  var
  
  
  
  var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var special = ["'",' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','>','?','@','[',']','^','_','`','{','}','~']
  var numeric = ['0','1','2','3','4','5','6','7','8','9']
  //creating blank array for character choices to later insert into for loop for selection of characters in password
  var characterChoices = []
  //creating blank array of a list of all characters 
  var characterList = []
 

 //if function to generate characterList array and concating all characters into array using lower, upper, special, and numbers
  if (characterObj.lower) {
    characterChoices = characterChoices.concat(lower)
  }
  if(characterObj) {
    characterChoices = characterChoices.concat(upper)
  }
  if(characterObj) {
    characterChoices = characterChoices.concat(special)
  }
  if (characterObj) {
    characterChoices = characterChoices.concat(numeric)
  }

  for (var i = 8; i <= 128; i++) {
    var password = generatePassword(characterChoices)

  characterList.push(password)
  }
  writePassword(characterList)
}







// Deleted this function to start functions from scarth
// Created function with options list to isolate variables we want in our password and create confirms and prompts to make user friendly
function getCharacters() {
    var addLowercase = confirm("Would you like to include lowercase letters in your password?")
    var addUppercase = confirm("Would you like to inclue uppercase letters in your password?")
    var addNumbers = confirm("Would you like to include numbers in your password?")
    var addSpecialCharcters = confirm("Would you like to include special characters in your password?")
    var passwordLength = prompt('Choose a password length: Must be at least 8 characters and no greater than 128 characters')
    var parsedAmount = parseInt(passwordLength)

    var options = {
      lower: addLowercase,
      upper: addUppercase,
      numeric: addNumbers,
      special: addSpecialCharcters,
      amount: parsedAmount,
    }

    writePassword(options)
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
