/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = /^([^a-zA-Z]*)([a-zA-Z]+)$/.exec(input)[1];
    // take care of invalid math expressions
    try {
      eval(result);
    } catch(e) {
      result = null;
    }
    // take care of cases with no numerical input
    // and invalid case of double fraction
    if (/^[a-zA-Z]+$/.test(input)) {
      result = '1';
    } else if (result.indexOf('/') != result.lastIndexOf('/')) {
      result = null;
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
