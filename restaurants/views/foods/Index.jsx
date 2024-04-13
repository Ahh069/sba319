const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { foods } = this.props;
        

        return (
            <DefaultLayout title={"Menu"}>
                <nav>
                    <a href="/foods/new">Create a New Order</a>
                </nav>
                <ul>
                    {foods.map((food, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/foods/${food._id}`}>
                                    {food.sandwich}
                                </a> {' '}
                                is {food.bread} {food.side} {food.dessert} <br></br>
                                {food.toGoOrder
                                ? `It is Ready`
                            :   `It is NOT ready`}
                            <br />
                            <a href={`/foods/${food._id}/edit`}>Edit This Order</a>
                            <form action={`/foods/${food._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;