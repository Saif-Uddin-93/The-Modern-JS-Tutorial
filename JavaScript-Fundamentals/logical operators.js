console.log(0 || 1 || 2) // 1
console.log(0 || 2 || 1) // 2
console.log(0 || false) // false
console.log(false || 0) // 0

console.log(0 && 1 && 2) // 0
console.log(0 && 2 && 1) // 0
console.log(1 && 2 && 3) // 3
console.log(true && 1 && 2) // 2
console.log(0 && false) // 0
console.log(false && 0) // false

