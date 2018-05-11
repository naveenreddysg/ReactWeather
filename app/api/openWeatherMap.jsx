var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=312c2e8c1b831c2f34ef1ec389fafb9c&units=imperial';


//312c2e8c1b831c2f34ef1ec389fafb9c

module.exports = {
    getTemp : function (location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        // axios works on promises
        return axios.get(requestUrl).then(function(res){
            
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);

            } else{
                return res.data.main.temp;
            }
        },function(res){
            throw new Error('city not found');
        })
    }
}