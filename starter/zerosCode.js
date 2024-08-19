// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./utils/earthGravityFactors.js');
const alienFactors = require('./utils/alienGravityFactors.js');

// Define a function to show user factors based on input type and value

let factorList = ["jump", "weight", "pushups"];
let systemList = ["metric", "imperial"];
let validFactor = false;
let validSystem = false;
let validValue = false;
let validPlanet = false;



function calculateFactor(userFactor, userValue, system, userPlanet) { 
    const factors = {};
    let isUsingMetric;

    if (system == 'metric') {
        isUsingMetric = true;
    } else { 
        isUsingMetric = false;
    }

    let measurement;
    let planetGroup;

    switch (userFactor) {
        case 'jump':
            isUsingMetric ? measurement = 'cm' : measurement = 'in';
            break;
        case 'weight':
            isUsingMetric ? measurement = 'kg' : measurement = 'lbs';
            break;
        case 'pushups':
            measurement = 'reps';
            break;
        default:
            measurement = 'units';
    };

    // parseInt(planetGroup);

    switch (userPlanet) { 
        case '1':
            planetGroup = gravityFactors;
            break;
        case '2':
            planetGroup = alienFactors;
            break;
        defualt:
            break;
    };

    for (let planet in planetGroup) { 
        let newValue;
        if (userFactor == 'jump' || userFactor == 'pushups') {
            newValue = parseFloat(userValue / planetGroup[planet]).toFixed(2);
        } else { 
            newValue = parseFloat(userValue * planetGroup[planet]).toFixed(2);
        }
        factors[planet] = newValue;
        console.log(`Your ${userFactor} on ${planet} is ${newValue}${measurement}`);
    };

    return factors;

};

    // Initialize an object to hold the results
    // Declare a variable to hold the unit of measurement
    // Iterate over each item in the gravityFactors object
        // Calculate the factor multiplied by the input value and round it to two decimals
    // Switch case to determine the measurement unit based on factor type
    // Iterate over the results and log each one



function getUserFactor() {
    let userFactor;
    let userValue;
    let system;
    let userPlanet;

    console.log("Enter your factor");
    console.log("Weight, jump, or pushups?");
    while (true) { 
        const factorPrompt = prompt(">");
        userFactor = factorPrompt;

        factorList.forEach(word => {
            if (userFactor.trim().toLowerCase() === word) {
                validFactor = true;
            } 
        });
        
        if (validFactor) {
            break;
        } else { 
            console.log("get good and enter it correctly");
        }
    }
    if (userFactor !== "pushups") {

        console.log("What system would you like to use? metric or imperial");
        while (validFactor) {
            const systemPrompt = prompt(">");
            system = systemPrompt;
    
            systemList.forEach(word => {
                if (system.trim().toLowerCase() === word) {
                    validSystem = true;
                }
            });
            if (validSystem) {
                break;
            } else {
                console.log("get good and enter it correctly");
            }
            // return system;
        }
    } else { 
        system = null;
        validSystem = true;
    }

    console.log("Enter the value you would like to calculate");
    while (validSystem) { 
        const valuePrompt = prompt(">");
        userValue = valuePrompt;

        if (isNaN(userValue)) {
            console.log('put the correct value. or else.');
        } else { 
            validValue = true;
            break;
        }
        // return userValue;
    }
    console.log("Would you like to like to calculate these planets based on Earth planets, or alien planets?");
    console.log("type 1 for earth planets, and 2 for alien planets");
    while (validValue) { 
        const planetPrompt = prompt(">");
        userPlanet = planetPrompt;

        if (userPlanet === "1" || userPlanet === "2") {
            validPlanet = true;
            break;
        } else { 
            console.log("count your days, enter 1 or 2.")
        }

    }
    
    calculateFactor(userFactor, userValue, system, userPlanet);
}

function showUserFactor() { 
    getUserFactor();
    function getUserFactor() { 

    }
}

global.getUserFactor = getUserFactor;
getUserFactor();


//error handling next on 8/15/2024




// Define a function to get user inputs for factor type and value
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
