// Core modules
const path = require('path')

// npm modules
const express = require('express')

// Other
const indexRouter = require('../router/index-router')


// returns express application object with several methods used for framework
app = express();

// Node provided variables for getting absolute path of directory and filename
console.log(__dirname)

// node module: path.join used to start from an absolute path, and move relatively to it to my static assets
console.log(path.join(__dirname, '../public/'))

const publicDirectory = path.join(__dirname, '../public/')

// ? Express.static provides static assets loaded by browser, html files when typed in browser Ex: localhost:3000/about.html will provide about page
app.use(express.static(publicDirectory));


app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});