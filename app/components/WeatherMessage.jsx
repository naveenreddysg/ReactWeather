var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's it {Number((temp-32)*5/9).toFixed(2)}&#8451; in {location}.</h3>
  )
};

module.exports = WeatherMessage;
