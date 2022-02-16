import React, {Component} from 'react';
import './welcome.css';
import ShortInfoBlock from '../ShortInfoBlock/shortInfoBlock';


export default class Welcome extends Component {    
    render() {
        return (
            <div>
                <div class="container">
                    <img
                        class="welcomeImage"
                        src="../../../WelcomeBackground.png"
                        alt="WelcomeBackgroundpng">
                    </img>
                    <div class="centered">
                        <ShortInfoBlock
                            header="Welcome to College Learn-About Day!"
                            description="April 2, 2022"
                            version="clear"
                            textSize="big"
                            buttonText="GET ZOOM LINK"
                            link=""
                        />
                    </div>
                </div>
                <ShortInfoBlock
                    header="Join the College Learn-About Day Discord!"
                    version="blue"
                    buttonText="JOIN THE DISCORD!"
                    link=""
                />
                <ShortInfoBlock
                    header="Draw your favorite food and sign your name on the Whiteboard!"
                    version="white"
                    buttonText="Take me to the whiteboard!"
                    link=""
                />
            </div>
        );
    }
}