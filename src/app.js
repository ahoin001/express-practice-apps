// Core modules
const path = require('path')

// npm modules
const express = require('express')


// returns express application object with several methods used for framework
app = express();

// Node provided variables for getting absolute path of directory and filename
console.log(__dirname)
console.log(__filename)
            
// node module: path.join used to start from an absolute path, and move relatively to it to my static assets
console.log(path.join(__dirname, '../public/'))

const publicDirectory = path.join(__dirname, '../public/')

app.use(express.static(publicDirectory));


// ? Express.static provides static assets, html files when typed in browser Ex: localhost:3000/about.html will provide about page

// ? Using send file, html can be provided at specific routes
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/about.html'));
});

// arg1 = route,
// arg2 = Callback that is provided with req and res object (Object with info of http we recieve, object we use to send something http back)

app.get('/weather', (req, res) => {

    // ? To send back json that can be consumed by client
    // ?Automatically stringified by express
    res.send({
        forecast: 'Sunny',
        location: 'Miami'
    });

});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});