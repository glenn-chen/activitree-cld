import React, {Component} from 'react';
import './sponsors.css';
import ASUCDLogo from '../../assets/asucd.png'
import SRRCLogo from '../../assets/srrc.png'
import CFCLogo from '../../assets/cfc.png'
import ShortInfoBlock from '../ShortInfoBlock/shortInfoBlock';

export default class Sponsors extends Component{
    render() {
        return(
            <React.Fragment>
                <ShortInfoBlock
                    header="Sponsors!"
                    hasButton="false"
                />  
                <div className = "sponsorImages">
                    <img src={ASUCDLogo} class="sponsor"></img>
                    <img src={SRRCLogo} class="sponsor"></img>
                    <img src={CFCLogo} class="sponsor"></img>
                </div>
            </React.Fragment>
        );
    }
}
