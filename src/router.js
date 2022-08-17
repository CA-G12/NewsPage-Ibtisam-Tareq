const express = require('express');

const router = express.Router();

const {
  getLandingPage,
  getNews, 
  searchNews, 
  clientError, 
  serverError,
} = require('./controllers');

router.get('/', getLandingPage);
router.get('/news', getNews);
router.get('/search/:news', searchNews);

router.use(clientError);
router.use(serverError);

module.exports = router;
