import React, {Component} from 'react';
import './sponsors.css';

export default class Sponsors extends Component{
    render() {
        return(
            <React.Fragment>
                <div className = "sponsorImages">
                    <img src="../../../asucd.png" class="sponsor"></img>
                    <img src="../../../srrc.png" class="sponsor"></img>
                    <img src="../../../cfc.png" class="sponsor"></img>
                </div>
            </React.Fragment>
        );
    }
}
