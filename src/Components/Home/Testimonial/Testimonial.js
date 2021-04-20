import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css'



const Testimonial = () => {
   
  const [showTestimonial , setShowTestimonial] = useState([]);
    useEffect(()=>{
        fetch('https://murmuring-crag-42998.herokuapp.com/testimonials')
        .then(res => res.json())
        .then(data => setShowTestimonial(data))
    },[])
 
    return (
        <div>
      <Carousel interval={1000}>
        {showTestimonial.map((testimonial, index) => {
          return (
            <Carousel.Item interval={5000} className='carousel-background'>
              <div>
                <h2 className="text-center text-white py-3">
                  Testimonials
                </h2>
              </div>
              <Carousel.Caption>
                  <div className='img my-5'>
                  <img className='img-thumbnail' src={testimonial.image} alt=".."/>
                  </div>
                  <h4>{testimonial.content}</h4>
                <small>{testimonial.author}</small>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
    );
};

export default Testimonial;