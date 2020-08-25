# Evaluate a News Article with Natural Language Processing (NLP) :speaking_head: :newspaper:

## Description
Training project for [Udacity Front End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) - Project 4</br>

This is a web tool that uses Natural Language Procesing to analyse the author's emotions in news articles or blog posts. The tool allows users to enter ih the URL of an article which will return data on whether the article is subjective or objective, as well as whether the author's tone is positive, neutral or negative. It uses two API endpoints from [The Aylien Text Analysis API](https://docs.aylien.com/textapi/#getting-started): Sentiment Analysis and Article Extraction.

Technologies used: HTML, CSS, Sass, JavaScript, Node.js, Express, Webpack, Service Workers, Babel, Aylien API

## Demo
![Natural Language Processing App](demo.gif)

[Live app deployed on Heroku here](https://news-article-nlp.herokuapp.com/)

## Features
:heavy_check_mark: Express server set up</br>
:heavy_check_mark: Webpack set up with two config files for development and production `npm run build-dev` and `npm run build-prod`</br>
:heavy_check_mark: Use of different Webpack loaders and plugins</br>
:heavy_check_mark: Uses Sass for styling</br>
:heavy_check_mark: JavaScript and stylesheets minified in the production environment</br>
:heavy_check_mark: Two requests made to [The Aylien Text Analysis API](https://docs.aylien.com/textapi/#getting-started) from the local server</br>
:heavy_check_mark: UI is updated with the API response</br>
:heavy_check_mark: Content can be viewed offline with Service Workers</br>

## Copyright
This project is based on the [Udacity FEND repository](https://github.com/udacity/fend/tree/refresh-2019)
