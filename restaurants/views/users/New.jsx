const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New User'}>
                
                <form action='/users' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Email: < input type="text" name="email"/> <br />
                    Phone: < input type="text" name="phone"/> <br />
                    Stay Signed In: <input type="checkbox" name="staySignedIn"/> <br />
                    <input type="submit" name="" value="Create User"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;