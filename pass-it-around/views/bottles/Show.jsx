const React = require('react');

class Show extends React.Component {
    render () {
        const {name, color, amount, readyToDrink} =this.props.bottle
        return (
            <>
                <h1> {name[0].toUpperCase() + name.substring(1)} Show Page </h1>
                <p> {name} is {color} and {readyToDrink? 'it\'s ready to Drink': 'it\'s not ready to Drink'} </p>
                <p> <a href={`/bottles/`}>Take one</a> bottle of {name} down and pass it around?</p>
            </>
        );
    }
}

module.exports = Show;

//trying to make it so when you click on "Take one" it sends you back to the Index page and shows -
// - that you have 1 less bottle of beer on the wall Exampl... if at 99 bottles of beer on the wall, you click, then it shows 98.
// here's some code i tried to implement on line 10, col 42  * onClick={countDown()}* & * onClick={amount = amount - 1}*