'use-strict';

$(document).ready(function() {

  var myThermo = new Thermostat();
  $( "#temperature" ).text(myThermo.temperature);
  $("body").css("background-color", myThermo.colour);

  $( "#increaseTemperature" ).click(function() {
    myThermo.increaseTemperature();
    $( "#temperature" ).text(myThermo.temperature);
    $("body").css("background-color", myThermo.colour);
  });

  $( "#decreaseTemperature" ).click(function() {
    myThermo.decreaseTemperature();
    $( "#temperature" ).text(myThermo.temperature);
    $("body").css("background-color", myThermo.colour);
  });

  $( "#reset" ).click(function() {
    myThermo.reset();
    $( "#temperature" ).text(myThermo.temperature);
    $("body").css("background-color", myThermo.colour);
  });

  $( "#powerSaveSwitch" ).click(function() {
    myThermo.powerSaveSwitch();
  });


});
