// NOT FINISHED

const prompt = require('prompt-sync')({ sigint: true });

let userArray = JSON.parse(prompt("Enter an array: "));


// console.log(userArray.length);

if (userArray.length < 4) {
    console.log(userArray[userArray.length - 1]);
} else {
    console.log(userArray[3]);
}

