// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();

// Import the gravityFactors module which contains factors for different planets
let gravityFactors = require('./utils/earthGravityFactors.js');
let alienFactors = require('./utils/alienGravityFactors.js');

// Define a function to show user factors based on input type and value
    // Initialize an object to hold the results
    // Declare a variable to hold the unit of measurement
    // Iterate over each item in the gravityFactors object
        // Calculate the factor multiplied by the input value and round it to two decimals
    // Switch case to determine the measurement unit based on factor type
    // Iterate over the results and log each one

function calculateValues(userValue, userFactor, userPlanetGroup) {
    let results = {};
    let measurement;
    let planetGroup;

    switch (userFactor) { 
        case 'jump':
            measurement = 'cm';
            break;
        case 'weight':
            measurement = 'kg';
            break;
        case 'push up':
            measurement = 'reps';
            break
        default:
            measurement = 'units';
            break;
    }

    switch (userPlanetGroup) { 
        case 1:
            planetGroup = gravityFactors;
            break;
        case 2:
            planetGroup = alienFactors;
            break;
        default:
            break;
    }

    for (let planet in userPlanetGroup) {
        let newValue = parseFloat(userValue * userPlanetGroup[planet]).toFixed(2);
        results[planet] = newValue;
        console.log(`Your ${userFactor} on ${planet} is ${newValue}${measurement}.`);
    }

    return results
}
// Define a function to get user inputs for factor type and value
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally

function promptUser() {
    console.log("What type of factor do you want to calculate on different planets?")
    console.log("Ex: weight, jump, push ups, etc.")
    const userFactor = prompt("> ");

    console.log("Now enter the numerical value of the factor on Earth:");
    const userValue = prompt("> ");

    console.log("Do you want to calculate this value on planets");
    console.log("in the solar system or alien planets?");
    console.log("Type, '1' for earth planets or, '2' for alien planets:");
    const userPlanetGroup = prompt("> ");
    parseInt(userPlanetGroup);
    calculateValues(userValue, userFactor, userPlanetGroup);
}

global.promptUser = promptUser;