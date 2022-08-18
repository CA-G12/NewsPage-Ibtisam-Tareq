const fetch = require('node-fetch')

const getNews = (req,res) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=en`)
    .then(response => response.json())
    .then(response =>res.json(response))
    .catch(error => {throw new Error(err)});
} 
module.exports = getNews;