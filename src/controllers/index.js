const { getLandingPage, getNews, searchNews } = require('./landing-page');
const { clientError, serverError } = require('./errors');

module.exports = {
  getLandingPage,
  getNews,
  searchNews,
  clientError,
  serverError,
};
