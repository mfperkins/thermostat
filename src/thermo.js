'use strict'

const MIN = 10;
const MAXP = 25;
const MAX = 32;
const DEFAULT = 20;

function Thermostat(temp = DEFAULT) {
  this._currentTemp = temp;
  this._powerSave = true;
  this._color = "yellow"
};

Thermostat.prototype = {
    currentTemp: function(){
      return this._currentTemp;
    },

    setColor: function () {
      if (this.currentTemp() < 18) {
        this._color = "green";
      } else if (this.currentTemp() > 24) {
        this._color = "red";
      } else {
        this._color = "yellow";
      };
    },

    powerSave: function() {
      this._powerSave === true ? this._powerSave = false : this._powerSave = true;
      return this._powerSave;
    },

    upButton: function() {
      if (this._powerSave === true && this.currentTemp() < MAXP) {
        this._currentTemp ++ ;
      }
      else if (this.currentTemp < MAX) {
        this._currentTemp ++ ;
      };
      this.setColor();
    },

    downButton: function() {
      if (this._currentTemp > MIN){
      this._currentTemp -- };
      this.setColor();
    },

    resetButton: function() {
      this._currentTemp = DEFAULT;
      this.setColor();
    }

};
