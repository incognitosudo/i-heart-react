import { Component } from "react";

//create Header component with const variable name Header as an arrow function
class Header extends Component {
  render() {
    //return a signle div with text between div tags "I ❤️ React"
      return (
        <div className='App-header'>
          I ❤️ React
        </div>
      )
  }
}


  //always add this
  export default Header;