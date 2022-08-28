import HeartLogo from '../assets/heart.svg'  //for every src needs to be imported. 2 dogs is extra level

//Heart component as a function component
const Heart = (props) => {
    return (
      //div renders an img jsx element with props: className, src, and alt and below is a p element
      <div className='heart'> 
        <img className='heart-img' src={HeartLogo} alt='heart'/> 
        <p className='heart-message'>
          {props.msg}
        </p>
      </div>
    );
  }

  export default Heart;