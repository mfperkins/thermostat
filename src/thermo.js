const MIN = 10;
const MAXP = 25;
const MAX = 32;

function Thermostat(temp = 20) {
  this._currentTemp = temp;
};


  Thermostat.prototype = {
      currentTemp: function(){
        return this._currentTemp;
      },
      
      upButton: function(){
        this._currentTemp ++ ;
      },

      downButton: function() {
        if (this._currentTemp > MIN){
        this._currentTemp -- };
      },

  };
