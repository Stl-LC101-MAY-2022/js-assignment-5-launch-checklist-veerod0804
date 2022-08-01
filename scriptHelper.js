// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=" ${imageUrl}">
    `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) == "Empty" ||
        validateInput(copilot) == "Empty" || 
        validateInput(fuelLevel) == "Empty" || 
        validateInput(cargoLevel) == "Empty") {
            console.log("Hello Cargo")
        alert("all fields are required");
    } 

    if (validateInput(pilot) == "Is a Number" ||
        validateInput(copilot) == "Is a Number" || 
        validateInput(fuelLevel) == "Not a Number" || 
        validateInput(cargoLevel) == "Not a Number") {
            console.log("Hello cargo")
        alert("please enter valid information for each field");
    } 

    //Updating Shuttle Requirements:
    pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;

    if (fuelLevel > 0 && fuelLevel < 10000) {
        list.style.visibility = "visible"; // adds visibility back
        fuelStatus.innerHTML = `There is not enough fuel for the journey.`
        launchStatus.innerHTML = `Shuttle not ready for launch.`
        launchStatus.style.color = 'red';
    }

    if (validateInput(cargoLevel) != "Empty" && cargoLevel > 10000) {
        list.style.visibility = "visible"; // adds visibility back
        cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`
        launchStatus.innerHTML = `Shuttle not ready for launch.`
        console.log("red")
        launchStatus.style.color = 'red';
    }

    if (fuelLevel > 10000 && cargoLevel < 10000 && validateInput(pilot) ==  "Not a Number" && validateInput(copilot) == "Not a Number" && validateInput(cargoLevel) != "Empty") {
        launchStatus.innerHTML = `Shuttle is ready for launch.`
        launchStatus.style.color = 'green';
        console.log("green")
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random()*planets.length); 
    return planets[planetIndex];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
