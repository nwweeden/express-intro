const ExpressError = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw an ExpressError and will
  // be handled in your route
  return strNums.map(function(num) {
    if (parseInt(num) === NaN) {
      console.log("not a number")
      return new ExpressError((num + " is not a number"), 400)
    } else {
      parseInt(num)
    }
  });
}


module.exports = { convertStrNums };