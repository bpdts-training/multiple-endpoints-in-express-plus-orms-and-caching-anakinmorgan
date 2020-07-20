var express = require('express');
var app = express();

app.get('/url', (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
  //res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
