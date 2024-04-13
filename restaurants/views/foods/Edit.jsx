
const React = require('react');

const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
    
      <form action={`/foods/${this.props.food._id}?_method=PUT`} method="POST">
          Sandwich: <input type="text" name="sandwich" defaultValue={this.props.food.sandwich}/><br/>
          Bread: <input type="text" name="bread"  defaultValue={this.props.food.bread}/><br/>
          Side: <input type="text" name="side"  defaultValue={this.props.food.side}/><br/>
          Dessert: <input type="text" name="dessert"  defaultValue={this.props.food.dessert}/><br/>
          To Go Order:
              { this.props.food.toGoOrder? <input type="checkbox" name="toGoOrder" defaultChecked />: <input type="checkbox" name="toGoOrder"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;