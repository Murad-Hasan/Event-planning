import React from 'react';
import './AboutUs.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const AboutUs = () => {
    return (
        <section className='about-section'>
            <h2 className="text-center my-5">About Us <br/> <hr className='about-border'/>
            </h2>
            
            <div className='row m-0' >
            <div className="col-md-6">
            <Carousel>
                <div>
                    <img src="http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/about-us/about-sliderImg1.jpg" alt=".."/>
                    <p className="legend">Decoration 1</p>
                </div>
                <div>
                    <img src="http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/about-us/about-sliderImg2.jpg" alt=".."/>
                    <p className="legend">Decoration 2</p>
                </div>
                <div>
                    <img src="http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/about-us/about-sliderImg4.jpg" alt=".."/>
                    <p className="legend">Decoration 3</p>
                </div>
            </Carousel>
            </div>
            <div className="col-md-6 aboutus-background left-content text-white d-flex flex-column justify-content-center align-items-center p-4 text-justify">
            <h2>Who we are ?</h2>
            <hr className='line'/>
            <p>Remaining essentially unchanged.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveinto electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and type setting industry has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveinto electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and type setting industry has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveinto electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and type setting industry has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className='d-flex'>
                <div className='mr-4 text-center'>
                    <span>28</span>
                    <p>Years of Experience</p>
                </div>
                <div className='mr-4 text-center'>
                    <span>158+</span>
                    <p>Events Every Year</p>
                </div>
                <div className='mr-4 text-center'> 
                    <span>11</span>
                    <p>Earns of Experience</p>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default AboutUs;