import { square, add } from './utils';
import { isAdult, canDrink } from './person';

console.log('app.js is running');
console.log(square(4))
console.log(add(4, 5))

console.log(isAdult(4));
console.log(isAdult(18));
console.log(isAdult(88));

console.log(canDrink(4));
console.log(canDrink(18));
console.log(canDrink(88));