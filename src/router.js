const express = require('express');

const router = express.Router();

const {
  getLandingPage,
  getNews, 
  clientError, 
  serverError,
} = require('./controllers');

router.get('/', getLandingPage);
router.get('/news', getNews);

router.use(clientError);
router.use(serverError);

module.exports = router;
