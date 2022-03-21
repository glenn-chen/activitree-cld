import React, {useState} from 'react';
import { CarouselData } from './carouselData.js';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './carousel.css';

const Carousel = ( {slides} ) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
        
    return (
        <section className="carousel">
            <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}/>
            <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}/>
            {CarouselData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}> {index === current && (
                        <img src={slide.image} className='carouselImage' />
                    )}
                </div>
                );
            })}
        </section>
    );
};

export default Carousel;