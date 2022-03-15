import React, {Component} from 'react';
import './footer.css';

export default class Footer extends Component {    
    render() {
        return (
            <React.Fragment>
            <div className="socialLinks">
                <a href = "https://www.instagram.com/learnactivitree/">
                    <button className="buttonLogo"><img src="../../../InstagramLogo.png"></img> </button>
                </a>

                <a href = "https://www.facebook.com/LearnActivitree">
                    <button className="buttonLogo" ><img src="../../../FacebookLogo.png"></img></button>
                </a>

                <a href = "https://learnactivitree.webflow.io/">
                    <button className="buttonLogo"><img src="../../../Website.png"></img></button>
                </a>
            </div>
            <h2 className="footerText">©2022 with ❤️ by Activitree</h2>
            </React.Fragment>
        );
    }
}