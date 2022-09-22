const prompt = require('prompt-sync')({ sigint: true });

// let userArray = prompt("Type an array: ");
let userArray = JSON.parse(prompt("Enter an array: ")); // JSON.parse() makes it into an array
// console.log(userArray);

console.log(userArray[0]);