const prompt = require('prompt-sync')({ sigint: true });

let userArray = JSON.parse(prompt("Enter an array: "));

arrayLengthBool = false

if (userArray.length >= 10) {
    arrayLengthBool = true
    console.log(arrayLengthBool)
} else {
    console.log(arrayLengthBool)
}