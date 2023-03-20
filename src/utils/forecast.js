const request = require('request');

const forecast = (latitude,longitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=925f111031c045cfc2bb2926ae87a85f&query=${latitude},${longitude}&units=f`;

    request({url, json: true},(error, {body}) => {
        if(error) {
            callback('Unable to connect WeatherStack Service !!!!',undefined);
        } else if(body.error) {
            callback(body.error.info);
        } else {
            callback(undefined,`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out.`)
        }
    })
}

module.exports = forecast;