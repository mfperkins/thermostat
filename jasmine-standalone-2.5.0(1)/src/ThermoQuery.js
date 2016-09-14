'use-strict';

$(document).ready(function() {

  var myThermo = new Thermostat();
  $( "#temperature" ).text(myThermo.temperature);
  $("body").css("background-color", myThermo.colour);

  updateTemperature = function() {
    $( "#temperature" ).text(myThermo.temperature);
  };

  updateColour = function() {
    $("body").css("background-color", myThermo.colour);
  };

  $( "#increaseTemperature" ).click(function() {
    myThermo.increaseTemperature();
    updateTemperature();
    updateColour();
  });

  $( "#decreaseTemperature" ).click(function() {
    myThermo.decreaseTemperature();
    updateTemperature();
    updateColour();
  });

  $( "#reset" ).click(function() {
    myThermo.reset();
    updateTemperature();
    updateColour();

  });

  $( "#powerSaveSwitch" ).click(function() {
    myThermo.powerSaveSwitch();
  });


});
