import React, {Component} from 'react';
import './navBar.css';
import ActivitreeLogo from '../../assets/ActivitreeLogo.png'

export default class NavBar extends Component {    
    render() {
        return (
            <div>
                <img className="navBarImage"
                    src={ActivitreeLogo}
                    alt="ActivitreeLogopng"
                />
                <h2 className="navBarTitle">College Learn-About Day!</h2>
                <hr className="navBarLine"></hr>
                <div className="navBarRow">
                
                    <a
                        className="navBarLink"
                        href="../Welcome/index.js"
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        Welcome
                    </a>
                    <a
                        className="navBarLink"
                        href="../Schedule/index.js"
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        Schedule
                    </a>
                    <a
                        className="navBarLink"
                        href="../Shoutouts/index.js"
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        Shoutouts
                    </a>
                    <a
                        className="navBarLink"
                        href="../AboutUs/index.js"
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        About Us
                    </a>
                    <a
                        className="navBarLink"
                        href="../Sponsors/index.js"
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        Sponsors
                    </a>
                </div>
            </div>
        );
    }
}

