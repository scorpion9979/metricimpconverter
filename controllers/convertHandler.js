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
    } catch (e) {
      result = null;
    }
    // take care of cases with no numerical input
    // and invalid case of double fraction
    if (/^[a-zA-Z]+$/.test(input)) {
      result = '1';
    } else if (result.indexOf('/') !== result.lastIndexOf('/')) {
      result = null;
    }
    return result;
  };

  this.getUnit = function(input) {
    var validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    var result = /^([^a-zA-Z]*)([a-zA-Z]+)$/.exec(input)[2];
    // takes care of invalid units
    if (validUnits.indexOf(result.toLowerCase()) === -1) {
      result = null;
    }
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    if (!initUnit) {
      return null;
    }
    let i = validUnits.indexOf(initUnit.toLowerCase());
    var result = validUnits[i + 1 - 2 * (i % 2)];

    return result;
  };

  this.spellOutUnit = function(unit) {
    var validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    var spellOuts = ['gallon', 'liter', 'mile', 'kilometer', 'pound', 'kilogram'];
    var result = spellOuts[validUnits.indexOf(unit.toLowerCase())];

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    if (!initUnit) {
      return null;
    }
    var result = eval(initNum);
    switch (initUnit.toLowerCase()) {
      case 'gal':
      result *= galToL;
      break;
      case 'l':
      result *= 1 / galToL;
      break;
      case 'mi':
      result *= miToKm;
      break;
      case 'km':
      result *= 1 / miToKm;
      break;
      case 'lbs':
      result *= lbsToKg;
      break;
      case 'kg':
      result *= 1 / lbsToKg;
      break;
    }
    result = Math.round(result * 1e5) / 1e5;
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
