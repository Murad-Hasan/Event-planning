import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css'

  // const testimonial = [
  //     {
  //     image: 'http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/user-img/testimonials-userImg4.jpg',
  //     content:'Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it.',
  //     author: 'Sarah M., Director of Events',
  //     },
  //     {
  //       image:'http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/user-img/testimonials-userImg3.jpg',
  //       content:
  //         'I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.',
  //       author: 'Sarah M., CCHS Foundation',
   
  //     },
  //     {
  //         image:'http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/user-img/testimonials-userImg1.jpg',
  //       content:
  //         "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
  //       author: 'Alexander B., Pan-Mass Challenge',
  
  //     },
  //     {
  //       image: 'http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/user-img/testimonials-userImg2.jpg',
  //       content:
  //         'MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.',
  //       author: 'Amy C., One Less Orphan Fund',
  
  //     },

  // ]

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