/** Simple demo Express app. */

const express = require("express");
const app = express();

// useful error class to throw
const ExpressError = require("./expressError");

const MISSING = 'Expected key `nums` with comma-separated list of numbers.';


/** Finds mean of nums in qs: returns {operation: "mean", result } */


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