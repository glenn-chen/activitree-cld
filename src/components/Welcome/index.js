import React, {Component} from 'react';
import './welcome.css';
import ShortInfoBlock from '../ShortInfoBlock/shortInfoBlock';
import WelcomeImage from '../../assets/WelcomeBackground.png'

export default class Welcome extends Component {    
    render() {
        return (
            <div>
                <div class="container">
                    <img
                        class="welcomeImage"
                        src={WelcomeImage}
                        alt="WelcomeBackgroundpng">
                    </img>
                    <div class="centered">
                        <ShortInfoBlock
                            header="Welcome to College Learn-About Day!"
                            description="April 2, 2022"
                            version="clear"
                            textSize="big"
                            buttonText="GET ZOOM LINK"
                            link="https://ucdavis.zoom.us/j/92110391733"
                        />
                    </div>
                </div>
                <ShortInfoBlock
                    header="Join the College Learn-About Day Discord!"
                    version="blue"
                    buttonText="JOIN THE DISCORD!"
                    link="https://discord.gg/CS2J3WJBzv"
                />
                <ShortInfoBlock
                    header="Draw your favorite food and sign your name on the Whiteboard!"
                    version="white"
                    buttonText="Take me to the whiteboard!"
                    link="https://jamboard.google.com/d/1q8xJl-1bV0yzqplhqZnN1RVOC82fUyOPUpJ4xR1CzGI/edit?usp=sharing"
                />
            </div>
        );
    }
}