import React, {Component} from 'react';

export default class NavBar extends Component {    
    render() {
        return (
            <div>
                <a
                    className="App-link"
                    href="/welcome"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Welcome
                </a>
                <a
                    className="App-link"
                    href="/schedule"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Schedule
                </a>
                <a
                    className="App-link"
                    href="/shoutouts"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Shoutouts
                </a>
                <a
                    className="App-link"
                    href="/about-us"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    About Us
                </a>
                <a
                    className="App-link"
                    href="/sponsors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Sponsors
                </a>
            </div>
        );
    }
}

