const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const food = this.props.food;

        return (
            <DefaultLayout title="Show an Individual Food">
                <p>The {food.sandwich} is {food.bread} {food.side} {food.dessert}</p>
                {food.readyToEat ? 'Order isReady' : "Order is NOT READY!"}
                <br />
                <a href={`/foods/${food._id}/edit`}>Edit This Food</a>
                <form action={`/foods/${food._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/foods">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;