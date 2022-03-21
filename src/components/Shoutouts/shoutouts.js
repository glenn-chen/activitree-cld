import React, {Component} from 'react';
import './shoutouts.css';
import ShortInfoBlock from '../ShortInfoBlock/shortInfoBlock';
import SHOUTOUTSImg from '../../assets/Shoutouts.png'
export default class Shoutouts extends Component{
    render() {
        return(
            <React.Fragment>
                <div className = "shoutouts-heading">
                    <ShortInfoBlock
                        header="THANK YOU!"
                        description="A HUGE SHOUTOUT TO EVERYONE WHO MADE THIS EVENT POSSIBLE!"
                        hasButton="false"
                    />  
                </div>
                <div className="grid">
                    <div class="item">
                        <img src={SHOUTOUTSImg} class="topImage"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>OUR HIGH SCHOOLERS!</h1>
                        <h3>
                            We couldn't have done this event without you! Thank you for all your feedback, creative topic ideas, and areas of interest. 
                            Thank you for your support and for being here today. Y'ALL ARE ROCKSTARS!!!
                        </h3>
                    </div>

                    <div class="item">
                        <img src={SHOUTOUTSImg} class="topImage"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>Brianna Wong</h1>
                        <h3>
                            For inventing and organizing the event through being an amazing Director, leading the Organization team, and leading the Day-of team! 
                            Thank you for also creating the welcome slides, mock lecture, event schedule, google forms, reaching out to spread the word, helping design the website layout, and even documenting the entire process with a fabulous storybook!
                        </h3>
                    </div>

                    <div class="item">
                        <img src={SHOUTOUTSImg} class="topImage"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>Varsha Senthil</h1>
                        <h3>
                            For helping invent the event, and organizing it through being a wonderful Director, leading the Organization team, and leading the Day-of team! 
                            Thank you for also helping design the website layout, adding information to the website, and creating the Kahoot, google forms, and event schedule while checking guidelines and making sure everything ran smoothly!
                        </h3>
                    </div>  
                </div>
            </React.Fragment>
        );
    }
}