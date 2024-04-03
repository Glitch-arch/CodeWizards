// Using this on the frontend some modal or something can be shown

class BaseError extends Error {
  constructor(name, statusCode, description, details) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;
    // Error.captureStackTrace(this);
  }
}
module.exports = BaseError;
