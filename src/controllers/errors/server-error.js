// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  };
  
  // 500 error handler
  