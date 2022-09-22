const prompt = require('prompt-sync')({ sigint: true });

let userArray = JSON.parse(prompt("Enter an array: "));

if (typeof userArray[2] !== "string") {
    console.log("Error - 3rd item in your array is not a string.");    
} else {
    console.log(userArray[2][1]);
}
