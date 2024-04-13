const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { users } = this.props;
       

        return (
            <DefaultLayout title={"Users Login"}>
                <nav>
                    <a href="/users/new">Create a New User</a>
                </nav>
                <ul>
                    {users.map((user, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/users/${user._id}`}>
                                    {user.name}
                                </a> {' '}
                                is {user.email}  { user.phone}<br></br>
                                {user.staySignedIn
                                ? `Stay Signed On`
                            :   `Not Signed On`}
                            <br />
                            <a href={`/users/${user._id}/edit`}>Edit This User</a>
                            <form action={`/users/${user._id}?_method=DELETE`} method="POST">
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