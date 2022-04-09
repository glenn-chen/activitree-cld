import React, {Component} from 'react';
import './footer.css';
import InstagramLogo from '../../assets/InstagramLogo.png'
import FacebookLogo from '../../assets/FacebookLogo.png'
import WebsiteLogo from '../../assets/Website.png'

export default class Footer extends Component {    
    render() {
        return (
            <React.Fragment>
            <div className="socialLinks">
                <a href = "https://www.instagram.com/learnactivitree/">
                    <button className="buttonLogo"><img src={InstagramLogo}></img> </button>
                </a>

                <a href = "https://www.facebook.com/LearnActivitree">
                    <button className="buttonLogo" ><img src={FacebookLogo}></img></button>
                </a>

                <a href = "https://learnactivitree.wixsite.com/learnactivitree">
                    <button className="buttonLogo"><img src={WebsiteLogo}></img></button>
                </a>
            </div>
            <h2 className="footerText">©2022 with ❤️ by Activitree</h2>
            </React.Fragment>
        );
    }
}