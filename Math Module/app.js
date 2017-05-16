var fuzzymath = require('./mathlib')();

console.log(fuzzymath.add(5,6));
console.log(fuzzymath.add(2,3));
x = fuzzymath.add(5,5);
console.log(x);
console.log(fuzzymath.multiply(777,777));
console.log(fuzzymath.multiply(10,42));
console.log(fuzzymath.square(5));
console.log(fuzzymath.random(1,100));
console.log(fuzzymath.square(777));
