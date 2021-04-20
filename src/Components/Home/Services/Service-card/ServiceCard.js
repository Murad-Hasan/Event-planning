import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({event}) => {
    const {serviceTitle, imageURL , servicePrice, serviceDescription , _id} = event;
    return (
        <div className='my-2 p-2 box-style'>
                <div className='d-flex justify-content-center'> 
                    {
                      imageURL ?  <img height='35px' src={imageURL} alt="..."/> 
                       : <img height='40px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' alt="..."/> 
                    }
                    <div className='px-3'>
                    <h3 className="name">{serviceTitle}</h3>
                    <p>{serviceDescription}</p>
                    </div>
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <h4>${servicePrice}</h4>
                   <Link to={`/getService/${_id}`}>
                   <button className='btn btn-outline-danger'>Get Service</button>
                   </Link>
                </div>
        </div>
    );
};

export default ServiceCard;