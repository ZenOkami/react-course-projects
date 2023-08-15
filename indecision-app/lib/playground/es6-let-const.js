"use strict";

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);
var nameLet = 'Jet';
nameLet = 'Julie';
console.log('nameLet', nameLet);
var nameConst = 'John';
console.log('nameConst', nameConst);
function getPetName() {
  var petName = 'Hal';
  return petName;
}
console.log(getPetName());
console.log(petName);
var fullName = 'Andrew Mead';
var firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);

// Const first, Let next, and Var never