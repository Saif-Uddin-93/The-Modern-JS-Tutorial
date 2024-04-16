/* //* If there is no break then the execution continues with the next case without any checks.

let a = +prompt('Enter a number', 0);

switch (a) {
    case 0:
        console.log('number is less than 0');
    case 5:
        console.log('number is less than 5');
    case 10:
        console.log('number is less than 10');
    default:
        break;
} */

//* using the logic from the previous example, switch cases can be grouped to have the same result for specific cases.

let colour = prompt('enter a colour');

switch (colour) {
    case 'red':
    case 'blue':
    case 'yellow':
        console.log('you have picked a primary colour!');
        break;

    case 'orange':
    case 'violet':
    case 'green':
        console.log('you have picked a secondary colour!');
        break;

    default:
        console.log('please enter a colour again')
        break;
}

