const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=88a0c38a8ea5973f2820993019f0cfe4&query=' + `${longitude},${latitude}&units=m`

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback(error, undefined)
        } else if (response.body.error){
            callback(undefined, 'Unable to find location')
        } else {
            const curr = response.body.current
            const s = `It is ${curr.temperature} degrees out and it feels like ${curr.feelslike} degrees`
            callback(undefined, s)
        }
    })
}

module.exports = forecast