// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
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
        formSubmission(null, null, pilot, copilot, fuel, cargo)
    })


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});