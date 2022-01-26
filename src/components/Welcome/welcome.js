import React, {Component} from 'react';
import './welcome.css';

class ShortDivider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
            </div>
        );
    };
}

export default class Welcome extends Component {    
    render() {
        return (
            <div>
                <img
                    class="welcomeImage"
                    src="../../../WelcomeBackground.png"
                    alt="WelcomeBackgroundpng">
                </img>
                <ShortDivider
                    header="Join the College Learn-About Day Discord!"
                    color="black"
                />
            </div>
        );
    }
}