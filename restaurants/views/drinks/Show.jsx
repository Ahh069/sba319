const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const drink = this.props.drink;

        return (
            <DefaultLayout title="Show an Individual Drink">
                <p>The {drink.name} is {drink.sweetness} {drink.size}</p>
                {drink.readyToDrink ? 'It is ready to drink' : "NOT READY!"}
                <br />
                <a href={`/drinks/${drink._id}/edit`}>Edit This Drink</a>
                <form action={`/drinks/${drink._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/drinks">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;