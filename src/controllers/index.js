const { getLandingPage, getNews } = require('./landing-page');
const { clientError, serverError } = require('./errors');

module.exports = {
  getLandingPage,
  getNews,
  clientError,
  serverError,
};
