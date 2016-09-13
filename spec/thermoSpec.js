describe("Thermostat", function() {
  var thermostat;
  var thermostat2;
  var thermostat3;
  var thermostat4;

  beforeEach(function() {
    thermostat = new Thermostat();
    thermostat2 = new Thermostat(10);
    thermostat3 = new Thermostat(25);
    thermostat4 = new Thermostat(32);
  });

  it("starts at a default of 20 degrees", function() {
    expect(thermostat.currentTemp()).toEqual(20)
    expect(thermostat._color).toEqual("yellow");
  });

  it("starts with power save mode on", function() {
    expect(thermostat._powerSave).toEqual(true);
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
    expect(thermostat2._color).toEqual("green");
  });

  it('should got to a max of 25 if power save mode on', function() {
    thermostat3.upButton()
    expect(thermostat3.currentTemp()).toEqual(25);
  });

  it('should got to a max of 32 if power save mode off', function() {
    thermostat4.upButton()
    expect(thermostat4.currentTemp()).toEqual(32);
    expect(thermostat4._color).toEqual("red");
  });

  it('should turn power saving mode off', function() {
    thermostat.powerSave()
    expect(thermostat._powerSave).toEqual(false);
  });

  it('should reset temp to 20 when hitting reset button', function() {
    thermostat.upButton()
    thermostat.resetButton()
    expect(thermostat.currentTemp()).toEqual(20);
  });

});
