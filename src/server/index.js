var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile('/client/views/index.html', { root: __dirname + '/..' });
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// Designates what port the app will listen to for incoming requests
app.listen(8000, () => { console.log('App listening on port 8000!') });