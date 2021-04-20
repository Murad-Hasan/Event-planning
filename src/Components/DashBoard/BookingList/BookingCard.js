import React from 'react';
import './BookingCard.css'

const BookingCard = ({singleBooking}) => {
    const {serviceTitle, serviceDescription, imageURL} = singleBooking;
    return (
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div class="box-part text-center">
                        
                        <img width='35px' src={imageURL} alt=""/>
                        
						<div class="title">
							<h4>{serviceTitle}</h4>
						</div>
                        
						<small>{serviceDescription}</small>
                        
						
                        
					 </div>
				</div>	 
    );
};

export default BookingCard;