var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var subscribers = [
    {
        "id": "234kjw",
        "email": "joe@shmoe.com",
        "firstName": "Joe"
    }
];


app.get('/subscribers', function(req, res) {
    console.log("GET From SERVER");
    res.send(subscribers);
});

app.post('/subscribers', function(req, res) {
    var subscriber = req.body;
    subscriber.id = Math.floor(Date.now() / 1000) + req.body.email;
    console.log(req.body);
    subscribers.push(subscriber);
    res.status(200).send("Successfully posted subscriber");
});

app.listen(6069);
