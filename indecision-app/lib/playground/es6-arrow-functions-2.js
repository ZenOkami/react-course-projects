"use strict";

var add = function add(a, b) {
  var c = a + b;
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }
  rest.forEach(function (item) {
    c += item;
  });
  return c;
};
console.log(add(55, 1, 2, 5, 7, 2, 5));
var makePastTense = function makePastTense(string) {
  return string.endsWith('ed') ? string : string.endsWith('e') ? "".concat(string, "d") : "".concat(string, "ed");
};
console.log(makePastTense('climb'));
var user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'Springfield', 'New York', 'Boulder'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;
    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
    var out = "".concat(this.name, " has lived in ");
    this.cities.forEach(function (city, index) {
      if (index === _this.cities.length - 1) {
        out += 'and ';
      }
      out += city + ', ';
    });
    return out;
  }
};
console.log(user.printPlacesLived());
var multiplier = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;
    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());