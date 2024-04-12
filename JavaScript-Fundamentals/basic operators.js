/* "" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // true //! 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '45px' //! '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // error //! NaN
"  -9  " + 5 // '  -9  5'
"  -9  " - 5 // -14
null + 1 // NaN //! 1
undefined + 1 // NaN
" \t \n" - 2 // -2 */
// ```
// 1. The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
// 2. The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
// 2. The addition with a string appends the number 5 to the string.
// 4. The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
// 5. null becomes 0 after the numeric conversion.
// 6. undefined becomes NaN after the numeric conversion.
// 7. Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.
// ```

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 12