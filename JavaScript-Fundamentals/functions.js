/* //* using the undefined value, you can keep a parameter as it's default value as shown below.
function showMessage(to, text = 'No text given.', from){
    console.log(`To, ${to},\n${text}\nFrom, ${from}`);
}

showMessage('Gandalf', undefined, 'Bilbo'); */

/* //* the value after the return must be on the same line or or within () otherwise JS will assume there is a ; after the return.
function example1() {
    return
        'this string is NOT reachable'
}

function example2() {
    return (
        'this string is reachable'
    )
}

function example3() {
    return
        ('this string is NOT reachable')
} */

/* //* function naming conventions
Function starting with…

"show.." - show something,
"get.." – return a value,
"calc.." – calculate something,
"create.." – create something,
"check.." – check something and return a boolean, etc.

showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false */

/* //* refactor checkAge() function to use tenary operator and OR operator
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

function checkAge1(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge2(age) {
    return (age > 18) || confirm('Did parents allow you?');
} */

/* //* write a function that returns the least of 2 numbers, for e.g, min(1,2)
function min(a, b){
    return (a>b) ? b : a;
} */

