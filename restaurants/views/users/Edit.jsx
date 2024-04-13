 
const React = require('react');
 
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
      
      <form action={`/users/${this.props.user._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.user.name}/><br/>
          Email: <input type="text" name="email"  defaultValue={this.props.user.email}/><br/>
          Phone: <input type="text" name="phone"  defaultValue={this.props.user.phone}/><br/>
          Stay Signed In:
              { this.props.user.staySignedIn? <input type="checkbox" name=" staySignedIn" defaultChecked />: <input type="checkbox" name=" staySignedIn"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;