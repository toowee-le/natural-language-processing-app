/**
 * 
 * Require packages
 */

var path = require('path');
const app = express();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static("dist"));

/**
 * Initiate SDK and declare Aylien API keys
 */

var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile('/client/views/index.html', { root: __dirname + '/..' });
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.listen(8080, () => { console.log('App listening on port 8080!') });