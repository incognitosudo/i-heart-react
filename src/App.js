import Header from './components/Header'; //we used different folder so we need to put it main. Also .js is unecessary because of babel import
 import './App.css';
 import HeartsList from './components/HeartsList';
import {Component} from 'react';


//returns rendering of Heart component with self closing tag and a prop of msg={message}
//This will take string contained int he message variable and pass it to the Heart component to render inside a heart image
class App extends Component {
  render() {
  //empty start and end tags around rendering of the Heart component --we can use div but unecessary
  //also put a rendering a Header component with self closing tag above Heart component
    return (
      //this is a single closing tag
      <>
        <Header />
        <HeartsList/>
      </>
    )
  }
}

export default App;
