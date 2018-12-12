/*
 *
 *
 *       Complete the handler logic below
 *       
 *       
 */

function ConvertHandler() {

  this.getNum = function (input) {
    var result;
    var num1, num2;
    if(input.search(/\d/g) == -1){
        input = 1;
      } else {
        input = input.replace(/[a-zA-Z]/g, '');
      }

    if (typeof input !== "number"){
      if (input.indexOf("/") !== -1) {
        num1 = input.substring(0, input.indexOf("/"));
        num2 = input.substring(input.indexOf("/") + 1, input.length);
        result = +num1 / +num2;
      } else {
        result = input;
      }
    } else {
      result = input;
    }

    return result;
  };

  this.getUnit = function (input) {
    var result = input = input.replace(/[^a-zA-Z]/g,'');
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    var result;

    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    console.log("unit: " + unit)
    var result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

switch (initUnit) {
    case "gal":
      result = initNum / galToL;
      break;
    case "L":
      result = galToL * initNum;
      break;
    case "lbs":
      result = initNum / lbsToKg;
      break;
    case "kg":
      result = lbsToKg * initNum;
      break;
    case "mi":
      result = initNum / miToKm;
      break;
    case "km":
      result = miToKm * initNum;
      break;
  }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {

    switch (initUnit) {
      case "gal":
        initUnit = "gallons";
        break;
      case "L":
        initUnit = "liters";
        break;
      case "lbs":
        initUnit = "pounds";
        break;
      case "kg":
        initUnit = "kilograms";
        break;
      case "mi":
        initUnit = "miles";
        break;
      case "km":
        initUnit = "kilometers";
        break;
    }

    switch (returnUnit) {
      case "gal":
        returnUnit = "gallons";
        break;
      case "L":
        returnUnit = "liters";
        break;
      case "lbs":
        returnUnit = "pounds";
        break;
      case "kg":
        returnUnit = "kilograms";
        break;
      case "mi":
        returnUnit = "miles";
        break;
      case "km":
        returnUnit = "kilometers";
        break;
    }
    var result =  initNum + " "  + initUnit + " converts to " + returnNum + " " + returnUnit;
    return result;
  };

}

module.exports = ConvertHandler;