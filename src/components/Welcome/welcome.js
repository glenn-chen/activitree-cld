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
                            description="May 13, 2022"
                            version="clear"
                            textSize="big"
                            buttonText="SIGN UP FORM"
                            link="https://docs.google.com/forms/d/e/1FAIpQLSfxwsoYy5TJJDgKhUrco_zJIujXfftQEhcDiPVuzbzlTIedrg/viewform"
                        />
                    </div>
                </div>
                <ShortInfoBlock
                    header="Join us online on Zoom!"
                    version="white"
                    buttonText="GET THE LINK"
                    link="https://ucdavis.zoom.us/j/92110391733"
                />
                <ShortInfoBlock
                    header="Draw your favorite food and sign your name on the Whiteboard!"
                    version="blue"
                    buttonText="Take me to the whiteboard!"
                    link="https://jamboard.google.com/d/1q8xJl-1bV0yzqplhqZnN1RVOC82fUyOPUpJ4xR1CzGI/edit?usp=sharing"
                />
            </div>
        );
    }
}