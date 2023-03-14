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

//redo with new perspective and fresh eyes
// Assignment Code
//Arrays for character selection
var number = ['0,1,2,3,4,5,6,7,8,9']
//convert number string into intiger
if (number) {parseInt}
var lower = ['a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z']
var special = ['~,!,@,#,$,%,^,&,*,(,),_,-,+,=']
var upper = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z']
var charChoice = []


//prompt user to pick character types for password and length of password as well as gens password
//code used and paraphrased from https://stackoverflow.com/questions/64378165/why-is-my-password-returning-as-undefined for 
//function generatePassword()

function generatePassword() {
  //credit to https://stackoverflow.com/questions/64378165/why-is-my-password-returning-as-undefined for help
  //will prompt user to pick a password length
  var first = prompt("Choose your password length between 8 and 128 characters")
  if (!first) {
    alert("Please add a value to proceed")
  } else if (first < 8 || first > 128)
  {"Please pick a number between 8 and 128"}
  //this will prompt the users for character confirms
  else {
    var second = confirm("Press OK to put numbers in your password")
    var third = confirm('Press OK to put lowercase in your password')
    var fourth = confirm('Press OK to put uppercase letters in your password')
    var fifth = confirm('press OK to put special characters in your password')
    
  }
  //this will prompt users to choose at least one option if they haven't choosen one
  if (!second && !third && !fourth && !fifth) 
  {alert ("Please choose a character type")}
}
console.log(generatePassword)





  


//AssignmentCode
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

