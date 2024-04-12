/* alert('z'>'a') // true
alert('a'>'z') // false
alert('bee'>'be') // true
alert('be'>'bee') // false
alert('a'>'A') // true
alert('A'>'a') // false */

/* console.log(null==undefined); // true
console.log(null==0 || null==false); // false

console.log( null > 0 );  // false
console.log( null == 0 ); // false
console.log( null >= 0 ); // true */

/* The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false. */

/* Summary
Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea. */

console.log(5 > 4) // true
console.log("apple" > "pineapple") // false
console.log("2" > "12") // false //! true
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(null == "\n0\n") // false
console.log(null == +"\n0\n") // false
console.log(null == +"0") // false
console.log(null == 0) // false
console.log(null == false) // false
console.log(0 == false) // true