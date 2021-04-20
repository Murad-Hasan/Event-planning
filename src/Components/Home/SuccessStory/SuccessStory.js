import React from 'react';
import SucessCard from '../SucessCard/SucessCard';
import './SuccessStory.css'

const successStoryData = [
    {
        id : 1,
        image : 'http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/event-img/story-img1.jpg',
        title: 'Birthday parties - Berlin ',
        date: '25 Mar 2017',
    },
    {
        id : 2,
        image : 'http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/event-img/story-img2.jpg',
        title: 'Birthday parties - Berlin ',
        date: '25 Mar 2017',
    },
    {
        id : 3,
        image : 'http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/event-img/story-img3.jpg',
        title: 'Birthday parties - Berlin ',
        date: '25 Mar 2017',
    },
    {
        id : 4,
        image : 'http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/event-img/story-img4.jpg',
        title: 'Birthday parties - Berlin ',
        date: '25 Mar 2017',
    },
    {
        id : 5,
        image : 'http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/event-img/story-img5.jpg',
        title: 'Birthday parties - Berlin ',
        date: '25 Mar 2017',
    },
    {
        id : 5,
        image : 'http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/event-img/story-img6.jpg',
        title: 'Birthday parties - Berlin ',
        date: '25 Mar 2017',
    }
]

const SuccessStory = () => {
    return (
       <section className='success-story py-5' style={{background: '#FFF7F7'}}>
            <div className="container mb-5 ">
            	<div className="sub-title2 text-center">
                    <h2>Success Story</h2>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                </div>
               <div className="container">
               <div className="row">
                    {
                        successStoryData.map(story => (
                            <div className="col-lg-4 col-md-6 ">
                        <SucessCard key={story.id} story={story}/> 
                        </div> 
                        ))
                    }
                </div> </div>  
       </section>
    );
};

export default SuccessStory;