import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css';

export default class Carousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="../../../NumeradeLogo.png"></img>
                </div>
                <div>
                    <img src="../../../Website.png"></img>
                </div>
            </Carousel>
        );
    }
}