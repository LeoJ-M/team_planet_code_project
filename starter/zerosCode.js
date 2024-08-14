// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync');
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./gravityFactors.js');
// Define a function to show user factors based on input type and value
function userFactors() { 


};
    // Initialize an object to hold the results
    // Declare a variable to hold the unit of measurement
    // Iterate over each item in the gravityFactors object
        // Calculate the factor multiplied by the input value and round it to two decimals
    // Switch case to determine the measurement unit based on factor type
    // Iterate over the results and log each one



const mathFactors = {
    Mercury: 10,
    Venus: 50,
    Mars: 100,
    Jupiter: 400,
    Neptune: 122,
    Uranus: 1001,
    Saturn: 900
};

function calculateFactor(FactorWeight) {
    
    const factorWeights = {};
    
    for (let calculation in mathFactors) {

        
        factorWeights[planet] = parseFloat((FactorhWeight * mathFactors[calculation]).toFixed(2));

        console.log(`Your factor on ${calculation} is: ${factorWeights[calculation]} in KG`);
       
    }
};
    
function getUserFactor() {
    console.log("Enter your fractor is");
    const userFactor = prompt(">");
    console.log("Your weight is:", userFactor);
    // create a method to take the user weight
    // and log the weight on other planets
    calculateFactor(userFactor);
}
global.getUserFactor = getUserFactor;



// Define a function to get user inputs for factor type and value
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
