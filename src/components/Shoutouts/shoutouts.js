import React, {Component} from 'react';
import './shoutouts.css';
import ShortInfoBlock from '../ShortInfoBlock/shortInfoBlock';

export default class Shoutouts extends Component{
    render() {
        return(
            <React.Fragment>
                <div className = "shoutouts-heading">
                    <ShortInfoBlock
                            header="THANK YOU!"
                            description="A HUGE SHOUTOUT TO EVERYONE WHO MADE THIS EVENT POSSIBLE!"
                    />  
                </div>
                <div className="grid">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            </React.Fragment>
        );
    }
}