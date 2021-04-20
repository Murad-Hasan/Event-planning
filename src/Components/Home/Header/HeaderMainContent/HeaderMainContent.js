import React from 'react';
import './HeaderMainContent.css'
import {
    faEnvelope,
    faMapMarkedAlt,
    faPhoneSquareAlt,
  } from "@fortawesome/free-solid-svg-icons";
import ContactCardInfo from '../ContactCardInfo/ContactCardInfo';


  const infoCardData = [
    {
      id:'1',
      infoTitle: "Mail Us Today",
      infoPost: "info@yourdomain.com",
      infoIcon: faEnvelope,
    },
    {
      id:'2',
      infoTitle: "Company Location",
      infoPost: "121 King Street, Melbourne",
      infoIcon: faMapMarkedAlt,
    },
    {
      id:'3',
      infoTitle: "+(012) 345 6789",
      infoPost: "Call us for more details",
      infoIcon: faPhoneSquareAlt,
    }
  ];
const HeaderMainContent = () => {
    return (
        <div className='container header-container'>
            <div>
                <h1>We Plan Events</h1>
                <img src='http://design.dev.drcsystems.ooo:8084/themeforest/event_planning/images/heading-blackBgimg2.png' alt=""/>
                <h3>of Any Scale & Complexity!</h3>
            </div>
            <div className="banner-search d-flex py-3 flex-column  flex-md-row">
                            <input type="text" className='form-control mr-lg-2 mr-md-2 mt-1 ' placeholder="Event Type"/>
                            <input type="text" className='form-control mr-lg-2 mr-md-2 mt-1 ' placeholder="Event Location"/>
                            <input type="date" className='form-control mr-lg-2 mr-md-2 mt-1 ' placeholder="Select Date" />
                            <input type="submit" className='btn btn-danger mt-1 mt-1' value="Confirm Now"/>    
            </div>
        <div className="pb-5 container-fluid banner-fluid">
        <div style={{marginBottom:'-49px'}} className="row text-center justify-content-center">
          {
          infoCardData.map(infoData => (
            <div className="col-sm-6 col-md-4">
              <div className="social ">
                <ContactCardInfo key={infoData.id} infoData={infoData}/>
              </div>
            </div>
          ))
          }
        </div>
      </div>
        </div>
    );
};

export default HeaderMainContent;