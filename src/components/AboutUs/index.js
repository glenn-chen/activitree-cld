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
                    <div className=""></div>
                </div>
            </React.Fragment>
        );
    }
}
