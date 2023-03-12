// Assignment Code
//added var password = document.querySelector("#password") to top for easier reference
var generateBtn = document.querySelector("#generate");
var writePassword = document.querySelector("#password")

//function to put arguments in to generate our password



// Deleted this function to start functions from scarth
// Created function with options list to isolate variables we want in our password and create confirms and prompts to make user friendly
function getCharacters() {
    var addLowercase = confirm ("Press 'OK' to confirm you would like to include lowercase letters")
    var addUppercase = confirm ("Press 'OK' to confirm you would like to inclue uppercase letters")
    var addNumbers = confirm ("Press 'OK' to confirm you would like to include numbers")
    var addSc = confirm ("press 'OK' to confirm you would like to include special characters")

    var options = {
      lower: addLowercase,
      upper: addUppercase,
      numbers: addNumbers,
      sC: addSc

    }
console.log (options)
    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
