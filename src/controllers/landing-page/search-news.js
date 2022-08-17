const fetch = require('node-fetch')

const searchNews=(req,res)=>{
    fetch(`https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=en&category=${req.params.news}`)
    .then(response => response.json())
    .then(response =>res.json(response))
    .catch(error => console.log(error));
} 
module.exports = searchNews;