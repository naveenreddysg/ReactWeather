var React = require('react');

// var About = React.createClass({
//     render: function(){
//         return(
//             <h3>About Component</h3>
//         );
//     }
// });

//or only when render function

// var About = function(props){
//     return(
//         <h3>About Component</h3>
//     );
// }

//or

//Arrow Function

var About = (props) => {
    return(
        <h3>About Component</h3>
    );
}

module.exports = About;