const express = require('express')

// returns application object with several methods used for framework
app = express();


// arg1 = route,
// arg2 = Callback that is provided with req and res object (Object with info of http we recieve, object we use to send something http back)

app.get('/', (req, res) => {
    res.send('<h1>Weather App!</h1>');
});

app.get('/help', (req, res) => {

    // ? To send back json that can be consumed by client
    // ?Automatically stringified by express
    res.send({
        name: 'Alex',
        age: 25
    });

});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Miami'
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});