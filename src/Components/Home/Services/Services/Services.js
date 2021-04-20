import React, { useEffect, useState } from "react";
import ServiceCard from "../Service-card/ServiceCard";
import "./Services.css";


const Services = () => {
  const [showEvents , setShowEvents] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setShowEvents(data))
    },[])
  return (
    <section className='service-background py-5'>
      <div className='text-center py-4'>
        <h2>Our Services</h2>
        <hr width='250px' color='gray'/>
      </div>
      <div className="service-list">
        <div className="container">
        <div className="row">
          {showEvents.map((event) => (
              <div className="col-sm-6 col-md-4">
                <ServiceCard event={event} key={event._id} />
              </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
