const ExpressError = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw an ExpressError and will
  // be handled in your route
}


module.exports = { convertStrNums };