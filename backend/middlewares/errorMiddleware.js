const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, request, response, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    response.status(err.statusCode||500).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }
  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };

    error.message = err.message;

    // wrong mongo id error
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid : ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    // handle mongoose validation error
    if (err.name === "ValidtionError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    // Handle mongoose duplicate key error

    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} entered !`;
      error = new ErrorHandler(message, 400);
    }

    // Handle wring jwt error
    if (err.name === "JsonWebTokenError") {
      const message = `JSON Web Token is invalid. Try Again !`;
      error = new ErrorHandler(message, 400);
    }


      // Handle wring jwt error
      if (err.name === "TokenExpiredError") {
        const message = `JSON Web Token is expired. Try Again !`;
        error = new ErrorHandler(message, 400);
      }

    response.status(error.statusCode||500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
