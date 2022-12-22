//check isNum is number or not
var isNum = 20.56
var flag = isNumeric(isNum)
console.log(flag)

function isNumeric(isNum) {
    if (typeof isNum != "string") return false // we only process strings!  
    return !isNaN(isNum) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(isNum)) // ...and ensure strings of whitespace fail
  }