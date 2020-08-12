/** Simple demo Express app. */

const express = require("express");
const app = express();

// useful error class to throw
const ExpressError = require("./expressError");
const { convertStrNums } = require("./utils");
const { 
  findMean,
  findMedian,
  findMode, 
} = require("./stats");

const MISSING = 'Expected key `nums` with comma-separated list of numbers.';


/** Finds mean of nums in qs: returns {operation: "mean", result } */
app.get("/mean", function(req, res, next) {
  console.log("inside /mean route")
  try {
    if (!req.query.nums) throw new ExpressError(MISSING, 400);
    let nums = (req.query.nums).split(",");
    let convertedNums = convertStrNums(nums);
    if (convertedNums instanceof ExpressError) throw new ExpressError((convertedNums.indexOf(NaN) + " is not a number"), 400);
    mean = findMean(convertedNums);
  } catch(err) {
    return next(err);
  }

  return res.json({
    response: {
      operation: "mean",
      value: mean
    }
  });
})

/** Finds median of nums in qs: returns {operation: "median", result } */


/** Finds mode of nums in qs: returns {operation: "mean", result } */



/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError);
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status }
  });
});


module.exports = app;