import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ContactForm from '../ContactFrom/ContactFrom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services/Services';
import SuccessStory from '../SuccessStory/SuccessStory';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
   
    return (
        <>
            <Header/>
            <Services/>
            <AboutUs/>
            <SuccessStory/>
            <Testimonial/>
            <OurTeam/>
            <ContactForm/>
            <Footer/>
        </>
    );
};

export default Home;