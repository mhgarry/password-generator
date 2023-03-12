 //2. validate input to ensure that the length is between 8-128 and ensure that at least
 //char type is being selected
 //3.display password on page
var generateBtn = document.querySelector("#generate");
//made function to generate the password
function generatePassword (passOption){
  return 'password text here'
  var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var special = ["'",' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','>','?','@','[',']','^','_','`','{','}','~']
  var numeric = ['0','1','2','3','4','5','6','7','8','9']
  //creating blank array for character choices to later insert into for loop for selection of characters in password
  var characterChoices = []
  //creating blank array of a list of all characters 
  var characterList = []

}

console.log(generatePassword)
   //where i want to be and where i want the password to generate
   
  
//added confirms for lowercase, numeric, uppercase, and special characters to ask the user
//to pick which options they want. Also added a prompt asking the user to choose a number
//between 8 and 128 for thier password lentgh
//since the prompt is a string i have to convert the string into a interger which 
//i did with the parseInit function
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password

  var addLowercase = confirm("Would you like to include lowercase letters in your password?")
  var addUppercase = confirm("Would you like to inclue uppercase letters in your password?")
  var addNumbers = confirm("Would you like to include numbers in your password?")
  var addSpecialCharcters = confirm("Would you like to include special characters in your password?")
  var passwordLength = prompt('Choose a password length: Must be at least 8 characters and no greater than 128 characters')
  var parsedAmount = parseInt(passwordLength)

  var passwordText = {
    lower: addLowercase,
    upper: addUppercase,
    numeric: addNumbers,
    special: addSpecialCharcters,
    amount: parsedAmount,
  }
  generatePassword(passwordText)
}
 //tested my passwordText options box and user prompts with console.log(passwordText) and 
 //my userprompts and functions worked as intended



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);