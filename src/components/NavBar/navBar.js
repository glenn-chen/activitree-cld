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
                        href="/welcome"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Welcome
                    </a>
                    <a
                        className="navBarLink"
                        href="/schedule"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Schedule
                    </a>
                    <a
                        className="navBarLink"
                        href="/shoutouts"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Shoutouts
                    </a>
                    <a
                        className="navBarLink"
                        href="/about-us"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        About Us
                    </a>
                    <a
                        className="navBarLink"
                        href="/sponsors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sponsors
                    </a>
                </div>
            </div>
        );
    }
}

