var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function(){
//         var {temp, location} = this.props;

//         return(
//             <h3>It's is {temp} in {location}</h3>
//         );
//     }
// });

//or

//Arrow Function

// var WeatherMessage = (props) => {
//     var {temp, location} = props;

//         return(
//             <h3>It's is {((temp-32)*(5/9)).toFixed(2)} &#8451; in {location}</h3>
//         );
// }

//or

//Arrow Function

var WeatherMessage = ({temp, location}) => {
        return(
            <h3 className="text-center">It's is {((temp-32)*(5/9)).toFixed(2)} &#8451; in {location}</h3>
        );
}

module.exports = WeatherMessage;