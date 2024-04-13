
const React = require('react');

const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
    
      <form action={`/drinks/${this.props.drink._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.drink.name}/><br/>
          Sweetness: <input type="text" name="sweetness"  defaultValue={this.props.drink.sweetness}/><br/>
          Size: <input type="text" name="size"  defaultValue={this.props.drink.size}/><br/>
          Ready to Drink :
              { this.props.drink.readyToDrink? <input type="checkbox" name="readyToDrink" defaultChecked />: <input type="checkbox" name="readyToDrink"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;