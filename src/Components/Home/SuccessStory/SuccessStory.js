import React from 'react';
import SucessCard from '../SucessCard/SucessCard';
import './SuccessStory.css'

const successStoryData = [
    {
        id : 1,
        image : 'https://i.ibb.co/SX4n1ty/story-img1.jpg',
        title: 'Birthday parties - Berlin ',
        date: '25 Mar 2017',
    },
    {
        id : 2,
        image : 'https://i.ibb.co/NtwM2kT/story-img2.jpg',
        title: 'Holy parties - Berlin ',
        date: '21 Apr 2016',
    },
    {
        id : 3,
        image : 'https://i.ibb.co/yWJrBKk/story-img3.jpg',
        title: 'Company meeting - Kochubari ',
        date: '02 Jan 2018',
    },
    {
        id : 4,
        image : 'https://i.ibb.co/z6QCwZD/story-img4.jpg',
        title: 'Stage Show - Berlin ',
        date: '12 Jun 2015',
    },
    {
        id : 5,
        image : 'https://i.ibb.co/g4Mf0sC/story-img5.jpg',
        title: 'Birthday parties - Berlin ',
        date: '30 May 2016',
    },
    {
        id : 6,
        image : 'https://i.ibb.co/mX52P4y/story-img6.jpg',
        title: 'Marriage parties - NY ',
        date: '05 Dec 2019',
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