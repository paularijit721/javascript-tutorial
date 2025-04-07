console.log("2" > 1); // true, because "2" is coerced to number
console.log("2" < 1); // false, because "2" is coerced to number

console.log(null > 0); // false, null is coerced to 0
console.log(null == 0); // true, because null is loosely equal to 0
console.log(null >= 0); // true, because null is coerced to 0

console.log(undefined > 0); // false, undefined is not a number
console.log(undefined == 0); // false, undefined is not loosely equal to 0

console.log("2" === 2); // false, because strict equality does not coerce types
