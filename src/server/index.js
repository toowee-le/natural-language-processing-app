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
    // Create an object to store all API data to use on the client
    const allData = {};
    allData.url = req.body.url;

    // First Aylien API endpoint to extract the article
    nlp.extract({
        url: req.body.url,
        best_image: true
    }, (error, response) => {
        // If there are no errors
        if (error === null) {
            allData.writer = response.author;
            allData.headline = response.title;
            allData.date = response.publishDate.slice(0, 10);
            allData.text = response.article.slice(0, 350) + '...';
            allData.img = response.image;

            // Second Aylien API endpoint to analyse the sentiment of extracted article
            if (response.article != "") {
                nlp.sentiment({
                    url: allData.url
                }, (error, response) => {
                    // If there are no errors
                    if (error === null) {
                        allData.polarity = response.polarity.charAt(0).toUpperCase() + response.polarity.slice(1);
                        allData.subjectivity = response.subjectivity.charAt(0).toUpperCase() + response.subjectivity.slice(1);
                        allData.polarityConfidence = response.polarity_confidence.toFixed(1);
                        allData.subjectivityConfidence = response.subjectivity_confidence.toFixed(1);
                        console.log(allData);
                        res.send(allData);
                    }
                })
            }
        }
    });
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => { console.log(`App listening on localhost: ${port}!`) });