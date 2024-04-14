/* console.log(0 || 1 || 2) // 1
console.log(0 || 2 || 1) // 2
console.log(0 || false) // false
console.log(false || 0) // 0

console.log(0 && 1 && 2) // 0
console.log(0 && 2 && 1) // 0
console.log(1 && 2 && 3) // 3
console.log(true && 1 && 2) // 2
console.log(0 && false) // 0
console.log(false && 0) // false 

console.log(!false)  // true
console.log(!0)  // true
console.log(!1)  // false
console.log(!'a')  // false

console.log(!!1)  // true
console.log(!!'a')  // true

console.log(console.log(1) || 2 || console.log(3)) // console.log(1), 2
console.log(console.log(1) && console.log(2)) // console.log(1), undefined

console.log( null || 2 && 3 || 4 ); // 3 // && has precedence so result is (null || 3 || 4) 

let age = prompt('enter age: ', 18);
if (age >= 14 && age <= 90){
    console.log(`${age} is within range`);
} else {console.log(`${age} is NOT within range`);} */

let user = prompt('Enter username');
let password;

(user === 'admin') ? 
(password = prompt('Enter Password') === 'admin') ?
console.log('Welcome!') : 
console.log('Wrong password!') : null
console.log(`${user} is logged in`)