"use strict";

var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};
console.log(getFirstName('Mike Smith'));
console.log('Mike Smith'.split(' ')[0]);