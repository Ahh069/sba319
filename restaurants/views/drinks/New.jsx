const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Drink'}>
               
                <form action='/drinks' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Sweetness: < input type="text" name="sweetness"/> <br />
                    Size: < input type="text" name="size"/> <br />
                    Is Ready to Drink: <input type="checkbox" name="readyToDrink"/> <br />
                    <input type="submit" name="" value="Create Drink"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;