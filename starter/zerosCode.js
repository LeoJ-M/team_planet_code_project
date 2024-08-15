// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./utils/earthGravityFactors.js');

// Define a function to show user factors based on input type and value

function calculateFactor(userFactor, userValue) { 
    const factors = {};

    let measurement;

    switch (userFactor) {
        case 'jump':
            measurement = 'cm';
            break;
        case 'weight':
            measurement = 'kg';
            break;
        default:
            measurement = 'units';
    };


    for (let planet in gravityFactors) { 
        factors[planet] = parseFloat((userValue * gravityFactors[planet]).toFixed(2));
    };

    for (let planet in factors) { 
        console.log(`Your ${userFactor} on ${planet} is ${factors[planet]}${measurement}`);
    };
   

};

    // Initialize an object to hold the results
    // Declare a variable to hold the unit of measurement
    // Iterate over each item in the gravityFactors object
        // Calculate the factor multiplied by the input value and round it to two decimals
    // Switch case to determine the measurement unit based on factor type
    // Iterate over the results and log each one

function getUserFactor() {
    console.log("Enter your fractor");
    const userFactor = prompt(">");
    console.log("Enter the value you would like to calculate");
    const userValue = prompt(">");

    // create a method to take the user weight
    // and log the weight on other planets
    calculateFactor(userFactor, userValue);
}

global.getUserFactor = getUserFactor;

//error handling next on 8/15/2024




// Define a function to get user inputs for factor type and value
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
