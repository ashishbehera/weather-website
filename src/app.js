const path = require('path');
const express = require('express');
const hbs = require('hbs');
const request = require('request');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();
const port = process.env.PORT || 8080;


//Define path for Express Config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ashish Behera'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ashish Behera'

    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some useful Text',
        title: 'Help',
        name: 'Ashish Behera'

    })

})


const weather = {
    latitude: 34.78,
    longitude: -67.89
}

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'Please provide an address'
        })
    } else {
        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
            if (error) {
                //return console.log(error);
                return res.send({ error })
            }

            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    //return console.log(error);
                    return res.send({ error })
                }
                res.send(
                    {
                        forecast: forecastData,
                        location,
                        address: req.query.address
                    });
            });

        });
    }


})

app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'

        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })

})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help article not found',
        title: 'Help Articles',
        name: 'Ashish Behera'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'page not found',
        title: '404',
        name: 'Ashish Behera'
    })
})

app.listen(port, () => {
    console.log('Sever is up on port ' + port);
})