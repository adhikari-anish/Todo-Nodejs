const { CustomApiError } = require('../errors/custom-error');

const errorHandlerMiddlerware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    if (err.statusCode && err.message) {
      return res.status(err.statusCode).json({status: false, msg: err.message});
    }
    return res.status(500).json({status: false, msg: 'Something went wrong'});
  } else {
    return res.render('500', {
      pageTitle: 'Error',
      path: '/500'
    })
  }
}

module.exports = errorHandlerMiddlerware;