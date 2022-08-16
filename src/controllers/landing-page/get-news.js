// const fetch = require('node-fetch');

module.exports = (req, res) => {
    fetch(`https://newsdata.io/api/1/news?apiKey=${process.env.API_KEY}`)
      .then((data) => data.json())
      .then((data) => res.json(data));
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  };
  // res.json({
  //   news: [
  //     {
  //       title: 'News 1',
  //       description: 'Description 1',
  //       url: 'https://www.google.com',
  //     },
  //   ],
  // });
