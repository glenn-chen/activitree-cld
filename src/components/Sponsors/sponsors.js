import React, {Component} from 'react';
import './sponsors.css';

export default class Sponsors extends Component{
    render() {
        return(
            <React.Fragment>
                <div className = "sponsorImages">
                    <img src="../../../NumeradeLogo.png"></img>
                    <img src="../../../FSLogo.png"></img>
                </div>
            </React.Fragment>
        );
    }
}
