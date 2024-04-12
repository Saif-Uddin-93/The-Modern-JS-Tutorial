let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//     (age < 18) ? 'Hello!' :
//     (age < 100) ? 'Greetings!' :
//     'What an unusual age!';

// let message;
// if(age < 3) message = 'Hi, baby!'
//     else if (age < 18) message = 'Hello!'
//     else if (age < 100) message = 'Greetings!'
//     else message ='What an unusual age!'

// function message(){ 
//     if(age < 3) return 'Hi, baby!'
//     else if (age < 18) return 'Hello!'
//     else if (age < 100) return 'Greetings!'
//     else return 'What an unusual age!'
// }

// console.log( message );
// console.log( message() );

(age < 3) ? console.log('Hi, baby!') :
    (age < 18) ? console.log('Hello!') :
    (age < 100) ? console.log('Greetings!') :
    console.log('What an unusual age!');