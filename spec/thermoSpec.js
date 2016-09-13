describe("Thermostat", function() {
  var thermostat;
  var thermostat2;

  beforeEach(function() {
    thermostat = new Thermostat();
    thermostat2 = new Thermostat(10);
  });

  it("starts at a default of 20 degrees", function() {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('increases temp by 1 degree using the up button', function(){
    thermostat.upButton()
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('decrease temp by 1 degree using the down button', function(){
    thermostat.downButton()
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it('cannot go below 10', function(){
    thermostat2.downButton()
    expect(thermostat2.currentTemp()).toEqual(10);
  });

});
