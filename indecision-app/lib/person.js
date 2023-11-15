"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdult = exports["default"] = exports.canDrink = void 0;
exports.star = star;
var isAdult = function isAdult(age) {
  return age >= 18;
};
exports.isAdult = isAdult;
var canDrink = function canDrink(age) {
  return age >= 21;
};
exports.canDrink = canDrink;
function star(num) {
  var n = '';
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
      n = n + '*';
    }
    console.log(n);
    n = '';
  }
}
var isSenior = function isSenior(age) {
  return age >= 65;
};

// star(3);
// star(4);
// star(5);
// star(6);
exports["default"] = isSenior;