import React, {Component} from 'react';
import './sponsors.css';
import ASUCDLogo from '../../assets/asucd.png'

export default class Sponsors extends Component{
    render() {
        return(
            <React.Fragment>
                <div className = "sponsorImages">
                    <img src={ASUCDLogo}></img>
                </div>
            </React.Fragment>
        );
    }
}
