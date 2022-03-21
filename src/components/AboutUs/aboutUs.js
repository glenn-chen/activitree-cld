import React, {Component} from 'react';
import Carousel from '../Carousel/carousel';
import { CarouselData } from '../Carousel/carouselData';
import ShortInfoBlock from '../ShortInfoBlock/shortInfoBlock';
import './aboutUs.css';

export default class About extends Component{
    render() {
        return (
            <React.Fragment>
                <ShortInfoBlock
                    header="Hi, we are Activitree!"   
                    description="Join us from anywhere in learning new things, sharing experiences, and cultivating curiosity!"             
                    version="white"
                    buttonText="Check out our main website!"
                    link="https://learnactivitree.wixsite.com/learnactivitree"
                />
                <Carousel slides={CarouselData} />;
                <div className="aboutUsBox">
                    <div class="item">
                        <img class="topImage"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>OUR HIGH SCHOOLERS!</h1>
                        <h3>
                            We couldn't have done this event without you! Thank you for all your feedback, creative topic ideas, and areas of interest. 
                            Thank you for your support and for being here today. Y'ALL ARE ROCKSTARS!!!
                        </h3>
                    </div>

                    <div class="item">
                        <img class="topImage"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>Brianna Wong</h1>
                        <h3>
                            For inventing and organizing the event through being an amazing Director, leading the Organization team, and leading the Day-of team! 
                            Thank you for also creating the welcome slides, mock lecture, event schedule, google forms, reaching out to spread the word, helping design the website layout, and even documenting the entire process with a fabulous storybook!
                        </h3>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}
