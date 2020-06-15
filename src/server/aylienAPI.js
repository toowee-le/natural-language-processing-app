const AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');

dotenv.config();

var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});