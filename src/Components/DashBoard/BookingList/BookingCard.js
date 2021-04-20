import React from 'react';
import './BookingCard.css'

const BookingCard = ({singleBooking}) => {
    const {serviceTitle, serviceDescription, imageURL, status} = singleBooking;
    return (
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div class="box-part text-center">
                        
                        <div className="d-flex justify-content-between">
						<img width='35px' src={imageURL} alt=""/>
						<p className="text-danger">{status}</p>
						</div>
                        
						<div class="title">
							<h4>{serviceTitle}</h4>
						</div>
						<small>{serviceDescription}</small>
					 </div>
				</div>	 
    );
};

export default BookingCard;