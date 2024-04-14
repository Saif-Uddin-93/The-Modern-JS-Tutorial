let user = '';
console.log(user ?? 'anonymous') // ''
user = 0;
console.log(user ?? 'anonymous') // 0
user = false;
console.log(user ?? 'anonymous') // false
user = null || undefined;
console.log(user ?? 'anonymous') // 'anonymous'

user = '';
console.log(user || 'anonymous') // 'anonymous'
user = 0;
console.log(user || 'anonymous') // 'anonymous'
user = false;
console.log(user || 'anonymous') // 'anonymous'
user = null || undefined;
console.log(user || 'anonymous') // 'anonymous'

// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

let a, b, c;
// let x = a && b ?? c; // Syntax error
let y = (a && b) ?? c;