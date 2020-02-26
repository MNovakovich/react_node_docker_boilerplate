const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

require('express-async-errors');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());


// Static files
//app.use(express.static(CLIENT_BUILD_PATH));
app.use('/images',express.static('static'));
// API
app.use('/api', require('./routes/api'));


// All remaining requests return the React app, so it can handle routing.
 app.get('/', function(request, response) {
   response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));

 /*  const pathToHtmlFile = path.resolve(__dirname, '../../client/build/index.html');
 const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
 response.send(contentFromHtmlFile);  */
}); 
app.use('/static',express.static(path.resolve(__dirname, '../../client/build/static')));

var server = app.listen(8001, function(){
  var port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});