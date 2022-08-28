import HeartLogo from '../assets/heart.svg'  //for every src needs to be imported. 2 dogs is extra level
import {Component} from 'react';

//Heart component as a function component
class Heart extends Component {
  render() {
    return (
      //div renders an img jsx element with props: className, src, and alt and below is a p element
      <div className='heart'> 
        <img className='heart-img' src={HeartLogo} alt='heart'/> 
        <p className='heart-message'>
          {this.props.msg}
        </p>
      </div>
    );
  }
}

  export default Heart;