import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
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
                    buttonText="Check out our website!"
                    link=""
                />
                <Carousel></Carousel>
            </React.Fragment>
        );
    }
}
