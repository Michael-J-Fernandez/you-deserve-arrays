const prompt = require('prompt-sync')({ sigint: true });

let userArray = JSON.parse(prompt("Enter an array: "));

let firstItemIsNumberBool = false;

if (typeof userArray[0] === "number") {
    firstItemIsNumberBool = true;
    console.log(firstItemIsNumberBool);
} else {
    console.log(firstItemIsNumberBool);
}