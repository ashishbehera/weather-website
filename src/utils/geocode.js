const request = require('request');


const gecode = (address, callback) => {
    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYXNoMTEwdWNlIiwiYSI6ImNqd3dudmM4ZTA2M2QzenBqbWkzaWV2cjIifQ.KKzT37dtpdcG8Jmjbtr0_A&limit=1`;
    
    request({url, json: true},(error, {body})=> {
        if(error) {
            callback('Unable to connect GeoCoding Services !!!!',undefined);
        } else if(body.features.length === 0) {
            callback('No matching results',undefined);
        } else {
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0], 
                location: body.features[0].place_name 

            })
        }
    })
}

module.exports = gecode;