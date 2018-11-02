var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hallo  to the world!");
});

app.listen(3000);
