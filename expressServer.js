var localExpressSrvr = require('express');

var app = localExpressSrvr();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

app.get('/', function(req, res){
    res.send('Welcome');
});

app.route('/Node').get(function(req, res)
{
    res.send("Contents of Node..delivered here");
});

app.route('/MS').get(function(req, res)
{
    res.send("Contents of Microsoft...delivered here");
});

