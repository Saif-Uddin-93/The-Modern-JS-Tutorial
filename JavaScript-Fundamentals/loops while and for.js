/* //// ---------------------------------------------------
for(true;true;true){
    console.log('for loop called');
    break;
}
console.log('for loop completed');

//// ---------------------------------------------------
for(;;){
    console.log('for loop called');
    break;
}
console.log('for loop completed');

//// ---------------------------------------------------
let i = 0;
for (; i < 3;) {
    console.log( i++ );
}
console.log('for loop completed');

//// ---------------------------------------------------
for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (!(i % 2)) continue;
  
    console.log(i); // 1, 3, 5, 7, 9
}
console.log('for loop completed');

//// ---------------------------------------------------
// labels
outer: for (let i = 0; i < 3; i++) {
    
    for (let j = 0; j < 3; j++) {
  
        let input = prompt(`Value at coords (${i},${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // breaks out loop labelled outer
        
        // do something with the value...
    }
}

alert('Done!'); 

//// ---------------------------------------------------
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

let i=0;
while (i<3){
    console.log( `number ${i}!` );
    i++;
}

//// ---------------------------------------------------
let input;
while((input = prompt('enter an input greater than 100', 0)) <= 100) {
    console.log(`${input} is not greater than 100`)
}
console.log(`${input} input is greater than 100`)

let num;
do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
console.log(`${num} num is greater than 100`) */

//// ---------------------------------------------------
function checkIsPrime(num) {
    if(num === 1 || num < 1) return false;
    else if(num === 2) return true;
    else{
        for(let i=2; i<num; i++){
            if (i !==num && num%i===0) return false;
        }
        return true
    }
}

//// ---------------------------------------------------