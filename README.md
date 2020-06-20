# Evaluate a News Article with Natural Language Processing (NLP)

## About
Udacity Front End Web Developer Nanodegree - Project 4
Technologies used: HTML, CSS, Sass, JavaScript, Node.js, Express, Webpack, Service Workers, Babel, Aylien API

A web app that analyses a new article to interpret the author's emotions and perspectives using Natural Language Processing (NLP). The user can add a URL of any news article for the app the analyse. It uses two API endpoints from [The Aylien Text Analysis API](https://docs.aylien.com/textapi/#getting-started): Sentiment Analysis and Article Extraction.


## Demo
![Natural Language Processing App](demo.gif)

## Features
* Express server set up
* Webpack set up with two config files for development and production `npm run build-dev` and `npm run build-prod`
* Use of different Webpack loaders and plugins
* Uses Sass for styling
* JavaScript and stylesheets minified in the production environment
* Two requests made to the Aylien Text Analysis API from the local server
* UI is updated with the API response
* Content can be viewed offline with Service Workers

