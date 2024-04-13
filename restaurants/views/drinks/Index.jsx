const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { drinks } = this.props;
        

        return (
            <DefaultLayout title={"Drinks Index Page"}>
                <nav>
                    <a href="/drinks/new">Create a New Drink</a>
                </nav>
                <ul>
                    {drinks.map((drink, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/drinks/${drink._id}`}>
                                    {drink.name}
                                </a> {' '}
                                is {drink.sweetness} {drink.size}  <br></br>
                                {drink.readyToDrink
                                ? `It is ready to Drink`
                            :   `NOT ready to drink`}
                            <br />
                            <a href={`/drinks/${drink._id}/edit`}>Edit This Drink</a>
                            <form action={`/drinks/${drink._id}?_method=DELETE`} method="POST">
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
