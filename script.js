// Write your JavaScript code here!

//  let { formSubmission, addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })

    let form = document.getElementById("launchForm");
let list = document.getElementById("faultyItems");
list.style.visibility = "hidden"; // Hide element

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let pilotName = document.querySelector("input[name=pilotName]");
    let pilot = pilotName.value;
    let copilotName = document.querySelector("input[name=copilotName]");
    let copilot = copilotName.value;
    let fuel = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuel.value;
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let cargoLevel = cargoMass.value;
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
}); 
});

 

