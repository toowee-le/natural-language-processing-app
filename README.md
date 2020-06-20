# Evaluate a News Article with Natural Language Processing (NLP) :newspaper:

## About
Udacity Front End Web Developer Nanodegree - Project 4</br>
Technologies used: HTML, CSS, Sass, JavaScript, Node.js, Express, Webpack, Service Workers, Babel, Aylien API

A web app that analyses news article to interpret the author's emotions and perspectives using NLP. The user can enter in a URL of any news article for the app to analyse. It uses two API endpoints from [The Aylien Text Analysis API](https://docs.aylien.com/textapi/#getting-started): Sentiment Analysis and Article Extraction.

## Demo
![Natural Language Processing App](demo.gif)

## Features
:heavy_check_mark: Express server set up</br>
:heavy_check_mark: Webpack set up with two config files for development and production `npm run build-dev` and `npm run build-prod`</br>
:heavy_check_mark: Use of different Webpack loaders and plugins</br>
:heavy_check_mark: Uses Sass for styling</br>
:heavy_check_mark: JavaScript and stylesheets minified in the production environment</br>
:heavy_check_mark: Two requests made to [The Aylien Text Analysis API](https://docs.aylien.com/textapi/#getting-started) from the local server</br>
:heavy_check_mark: UI is updated with the API response</br>
:heavy_check_mark: Content can be viewed offline with Service Workers</br>