// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems")
    let form = document.querySelector("form")

    form.addEventListener("submit", function(event){
        event.preventDefault()
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let pilot = pilotName.value
        let copilot = copilotName.value
        let fuel = fuelLevel.value
        let cargo = cargoMass.value
        formSubmission(document, list, pilot, copilot, fuel, cargo)
    });


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function(result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function() {
       console.log(listedPlanets);
       let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);  
   
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   });
    
   });