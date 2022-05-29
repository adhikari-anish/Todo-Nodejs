class CustomApiError extends Error {
  constructor (message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createApiError = (msg, statusCode) => {
  return new CustomApiError(msg, statusCode);
}

module.exports = {createApiError, CustomApiError};