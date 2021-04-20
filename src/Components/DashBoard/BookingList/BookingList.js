import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import SideBarLink from '../SideBar/SideBarLink';
import BookingCard from './BookingCard';
const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [showOrder, setShowOrder] = useState([]);
    useEffect(() => {
      fetch(`https://murmuring-crag-42998.herokuapp.com/showOrder?email=`+ loggedInUser.email)
        .then((res) => res.json())
        .then((data) => setShowOrder(data));
    }, [loggedInUser.email]);
    
    console.log(showOrder);
    return (
        <section>
        <DashBoardHeader/>
         <div className="row m-0">
     <div className="col-md-3">
     <div className='side-bar'>
     <SideBarLink/>
 </div>
     </div>
     <div className="col-md-9 rounded dashboard-content">
         <h2>Your Total Booking Services : {showOrder.length}</h2>
         <div className="row">
         {
             showOrder.map(singleBooking => (
                     <BookingCard singleBooking={singleBooking}/>
             ))
         }
         </div>
     </div>
 </div>
    </section>
    );
};

export default BookingList;