const fetch = require('node-fetch')

const getNews=(req,res)=>{

    fetch(`https://newsdata.io/api/1/news?apikey=pub_103021c47300bcc8aa250958a11ccf42eaa05&language=en`)
    .then(response => response.json())
    //.then(response => cb(response))
    .then(response =>res.json(response))
    .catch(error => console.log(error));

} 
module.exports =getNews