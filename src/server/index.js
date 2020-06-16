/**
 * 
 * Require packages
 */

var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');
      dotenv.config();

const app = express();

const mockAPIResponse = require('./mockAPI.js');

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("dist"));

//console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

var nlp = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.post('/apiCall', (req, res) => {
    console.log(req);
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`App listening on localhost: ${port}!`) });