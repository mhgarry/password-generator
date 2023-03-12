// Assignment Code
//added var password = document.querySelector("#password") to top for easier reference
var generateBtn = document.querySelector("#generate");
var writePassword = document.querySelector("#password")

//function to put arguments in to generate our password
function generatePassword(charactersObj) {
  //created arrays for lowercase letter, uppercase letters, and special characters to be used in the generation of password
  var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var sC = ["'",' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','>','?','@','[',']','^','_','`','{','}','~']
  //creating an array for numbers 8 through 128 to be used in the function using a for loop to search
  var nums = []
}


// Deleted this function to start functions from scarth
// Created function with options list to isolate variables we want in our password and create confirms and prompts to make user friendly
function getCharacters() {
    var addLowercase = confirm ["Press 'OK' to confirm you would like to include lowercase letters"]
    var addUppercase = confirm ["Press 'OK' to confirm you would like to inclue uppercase letters"]
    var addNumbers = confirm ["Press 'OK' to confirm you would like to include numbers"]
    var addSc = confirm ["press 'OK' to confirm you would like to include special characters"]

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
