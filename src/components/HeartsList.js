import Heart from './Heart';
import CandyColoredHeart from './CandyColoredHeart';
import {Component} from 'react';

const messages = [
    'cool cud',
    'me my <3',
    'you are bear',
    'team bear',
    'time hug',
    'fang',
    'bog love',
    'me have love',
    'all hover',
    'sweat poo',
    'u hack',
    'stank love',
    'heart me',
    'wink bear',
    'bear bear',
    'be my bear',
    'yank o way',
    'mage love',
    'oy',
    'in a fan'
];

class HeartsList extends Component {
    render() {
        return (
            <div className='hearts-container'>
                {
                    //pull index off and pass into a key
                    //array.map maps each message to a Heart 
                    messages.map((message, index) => <CandyColoredHeart key={index} msg={message}/>)       
                }
                </div>
        )
     }
} 
        


        /**-----This is without color
        //javascript expression inside curly braces.
        //map method take in callback function and inside callback function, we have access to contents of each element of the array.
        //we are passing message to Heart
        <div className='hearts-container'>
            {messages.map((message, index) => ( //pull index off and pass into a key prop on our heart
                <Heart key={index} msg={message}/> //array.map maps each message to a Heart 
            ))} 
        </div>
        **/


    


export default HeartsList;