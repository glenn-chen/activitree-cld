import React, {Component} from 'react';
import './welcome.css';
import ShortInfoBlock from '../ShortInfoBlock/shortInfoBlock';


export default class Welcome extends Component {    
    render() {
        return (
            <div>
                <img
                    class="welcomeImage"
                    src="../../../WelcomeBackground.png"
                    alt="WelcomeBackgroundpng">
                </img>
                <ShortInfoBlock
                    header="Join the College Learn-About Day Discord!"
                    version="blue"
                />
                <ShortInfoBlock
                    header="Draw your favorite food and sign your name on the Whiteboard!"
                    version="white"
                />
            </div>
        );
    }
}