// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();

// Import the gravityFactors module which contains factors for different planets
let gravityFactors = require('./gravityFactors');

// Define a function to show user factors based on input type and value
    // Initialize an object to hold the results
    // Declare a variable to hold the unit of measurement
    // Iterate over each item in the gravityFactors object
        // Calculate the factor multiplied by the input value and round it to two decimals
    // Switch case to determine the measurement unit based on factor type
    // Iterate over the results and log each one

function calculateUserFactors(userValue, userFactor) {
    let results = {};
    for (let planet in gravityFactors) {
        let newValue = parseFloat(userValue * gravityFactors[planet]).toFixed(2);
        results[planet] = newValue;
        console.log(`${userFactor} on ${planet}: ${newValue}`);
    }
    return results
}
// Define a function to get user inputs for factor type and value
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally

function promptUser() {
    console.log("What type of factor do you want to calculate in different planets?")
    console.log("Ex: Weight, jump height, amount of push ups, etc.")
    const userFactor = prompt("> ");

    console.log("Now enter the numerical value of the factor you can do on Earth:");
    const userValue = prompt("> ");
    calculateUserFactors(userValue, userFactor);
}

global.promptUser = promptUser;