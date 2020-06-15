/**
 * 
 * Require packages
 */

var path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const aylienAPI = require('./aylienAPI');
const mockAPIResponse = require('./mockAPI.js');

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static("dist"));

console.log(__dirname);

/**
 * GET route
 */

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

/**
 * Start server
 */

app.listen(8080, () => { console.log('App listening on port 8080!') });