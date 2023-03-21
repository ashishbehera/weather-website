const { hasSubscribers } = require('diagnostics_channel');
const express = require('express');
const path = require('path');
const hbs =  require('hbs');
const app = express();
const forecast = require('./utils/forecast');
const gecode = require('./utils/geoCode');
const port = process.env.PORT || 3000;

//Define path for express configs
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup hnadlebar engines,views & partials location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup  static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Luke'
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About',
        name: 'Luke'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Luke'
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send ({
            error: 'You must provide a address'
        })
    }
    const address = req.query.address;
    // res.send({
    //     'forecast': 'Its 3 degree outside',
    //     'location': address
    // })

    gecode(address, (error, {latitude, longitude, location}={}) => {

        if (error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }

            res.send({
                location,
                forecastData,
                address,
            })
        })
    })
});

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query);
    res.send({
        products: [] 
    })
});


app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'Luke'
    });
});


app.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'My 404 page',
        name: 'Luke'
    });
});

app.listen(port, () => {
    console.log(`Server is up & running on port ${port}`);
});
