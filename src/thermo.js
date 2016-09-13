const MIN = 10;
const MAXP = 25;
const MAX = 32;

function Thermostat(temp = 20) {
  this._currentTemp = temp;
  this._powerSave = true;
};

Thermostat.prototype = {
    currentTemp: function(){
      return this._currentTemp;
    },

    powerSave: function() {
      this._powerSave === true ? this._powerSave = false : this._powerSave = true;
      return this._powerSave;
    },

    upButton: function() {
      console.log(this._powerSave)
      if (this._powerSave === true && this.currentTemp() < MAXP) {
        this._currentTemp ++ ;
      }
      else if (this.currentTemp < MAX) {
        this._currentTemp ++ ;
      };
    },

    downButton: function() {
      if (this._currentTemp > MIN){
      this._currentTemp -- };
    },

};
