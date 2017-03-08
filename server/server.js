const express = require('express');
const path = require('path');
const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.get('*', function (req, res){
  response.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port);
console.log("server started on port " + port);