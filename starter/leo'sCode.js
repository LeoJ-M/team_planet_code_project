// Import the prompt-sync library to handle user input
const prompt = require("prompt-sync")();

// Import the gravityFactors module which contains factors for different planets
let gravityFactors = require("./utils/earthGravityFactors.js");
let alienFactors = require("./utils/alienGravityFactors.js");

// Define a function to show user factors based on input type and value
// Initialize an object to hold the results
// Declare a variable to hold the unit of measurement
// Iterate over each item in the gravityFactors object
// Calculate the factor multiplied by the input value and round it to two decimals
// Switch case to determine the measurement unit based on factor type
// Iterate over the results and log each one

function calculateValues(userValue, userSystem, userFactor, userPlanetGroup) {
  let results = {};
  let measurement;
  let planetGroup;
  let isUsingMetric;
  if (userSystem == "metric") {
    isUsingMetric = true;
  } else {
    isUsingMetric = false;
  }

  switch (userFactor) {
    case "jump":
      isUsingMetric ? (measurement = "cm") : (measurement = "in");
      break;
    case "weight":
      isUsingMetric ? (measurement = "kg") : (measurement = "lbs");
      break;
    case "push up":
      measurement = "reps";
      break;
    default:
      measurement = "units";
      break;
  }

  switch (parseInt(userPlanetGroup)) {
    case 1:
      planetGroup = gravityFactors;
      break;
    case 2:
      planetGroup = alienFactors;
      break;
    default:
      break;
  }

  for (let planet in planetGroup) {
    let newValue;
    if (userFactor == "jump" || userFactor == "pushups") {
      newValue = parseFloat(userValue / planetGroup[planet]).toFixed(2);
    } else {
      newValue = parseFloat(userValue * planetGroup[planet]).toFixed(2);
    }
    results[planet] = newValue;
    console.log(
      `Your ${userFactor} on ${planet} is ${newValue}${measurement}.`
    );
  }

  // return results
}
// Define a function to get user inputs for factor type and value
// Prompt the user to enter the type of factor they want to calculate
// Prompt the user to enter the numerical value of the factor
// Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally

let factorList = ["weight", "jump", "pushups"];
let systemList = ["metric", "imperial"];
let validFactor = false;
let validSystem = false;
let validValue = false;
let validPlanet = false;

function promptUser() {
  console.log(
    "What type of factor do you want to calculate on different planets?"
  );
  console.log("'weight', 'jump', or 'pushups'");
  while (true) {
    const userFactor = prompt("> ");

    factorList.forEach((item) => {
      if (userFactor.trim().toLowerCase() === item) {
        validFactor = true;
      }
    });
    if (validFactor) {
      break;
    } else {
      console.log("Please enter a valid value");
    }
  }

  console.log("Do you want to use?");
  console.log("'metric' or 'imperial'");
  while (validFactor) {
    const userSystem = prompt("> ");

    systemList.forEach((item) => {
      if (userSystem.trim().toLowerCase() === item) {
        validSystem = true;
      }
    });
    if (validSystem) {
      break;
    } else {
      console.log("Please enter a valid value");
    }
  }

  console.log("Now enter the numerical value of the factor on Earth:");
  while (validSystem) {
    const userValue = prompt("> ");

    if (isNaN(userValue)) {
      console.log("Please enter a numeric value");
    } else {
      validValue = true;
      break;
    }
  }

  console.log("Do you want to calculate this value on");
  console.log("planets in the solar system or alien planets?");
  console.log("Type, '1' for normal planets or, '2' for alien planets:");
  while (validValue) {
    const userPlanetGroup = prompt("> ");

    if (userPlanetGroup === "1" || userPlanetGroup === "2") {
      validPlanet = true;
      break;
    } else {
      console.log("Please enter 1 or 2");
    }
  }

    while (validPlanet) {
        calculateValues(userValue, userSystem, userFactor, userPlanetGroup);
    }
}

global.promptUser = promptUser;
