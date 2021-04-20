import { faCommentAlt, faListAlt, faPlus, faShoppingCart, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const SideBarLink = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    useEffect(() => {
      fetch("http://localhost:5000/isAdmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loggedInUser.email })
      })
        .then((response) => response.json())
        .then((data) => setIsAdmin(data));
    }, [loggedInUser.email]);
    return (
        <div className='p-5'>
            <ul>
                {
                  !isAdmin && <div>
                    <li><Link to='/getService' className='text-muted text-decoration-none'><h6><FontAwesomeIcon icon={faShoppingCart}/> Get Service</h6></Link></li>
                <li><Link to='/booking' className='text-muted text-decoration-none'><h6><FontAwesomeIcon icon={faListAlt}/> Booking</h6></Link></li>
                <li><Link to='/review' className='text-muted text-decoration-none'><h6><FontAwesomeIcon icon={faCommentAlt}/> Review</h6></Link></li>
   
                  </div>
                } {    isAdmin && 
                    <div>
                        <li><Link to='/admin/orderList' className='text-muted text-decoration-none'><h6><FontAwesomeIcon icon={faListAlt}/> OrderList</h6></Link></li>
                <li><Link to='/admin/addService' className='text-muted text-decoration-none'><h6><FontAwesomeIcon icon={faPlus}/> Add Service</h6></Link></li>
                <li><Link to='/admin/makeAdmin' className='text-muted text-decoration-none'><h6><FontAwesomeIcon icon={faUserPlus}/> Make Admin</h6></Link></li>
                <li><Link to='/admin/manageService' className='text-muted text-decoration-none'><h6><FontAwesomeIcon icon={faTasks}/> Manage Service</h6></Link></li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default SideBarLink;