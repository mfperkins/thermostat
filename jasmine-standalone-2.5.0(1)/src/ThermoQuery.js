'use-strict';

$(document).ready(function() {

  var myThermo = new Thermostat();
  $( "#temperature" ).text(myThermo.temperature);
  $("body").css("background-color", myThermo.colour);

  $("#select-city").submit(function(event){
    event.preventDefault();
    var city = $("#current-city").val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + 'id=2643743&&APPID=0fe1e83440a5a742ec8513f81dfb9446&units=metric', function( data ) {
    $("#localWeather").text(data.main.temp);
    });
  });

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
