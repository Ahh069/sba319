const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Order'}>
               
                <form action='/foods' method="POST">
                    Sandwich: <input type="text" name="sandwich" /><br />
                    Bread: < input type="text" name="bread"/> <br />
                    Side: < input type="text" name="side"/> <br />
                    Dessert: < input type="text" name="dessert"/> <br />
                    To Go Order: <input type="checkbox" name="toGoOrder"/> <br />
                    <input type="submit" name="" value="Create Order"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;