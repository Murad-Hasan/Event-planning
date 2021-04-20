import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './DashBoardHeader.css'

const DashBoardHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const logInUser = JSON.parse(localStorage.getItem('user'))
    return (
        <div className="wrapper-div">
            <div className="box a">
            <Link to ='/home'> <img src="https://i.ibb.co/QMgMRGt/logo-white.png" alt="logo"/></Link>
            </div>
            <div className="box b">
                <div className="d-flex justify-content-around align-items-center py-3">
                    <h4>DashBoard</h4>
                   <div className="d-flex justify-content-between">
                   {
                        logInUser.photo ? <img width='60px' height='60px' src={logInUser.photo} className='rounded-circle mr-3' alt="profile"/> : <h2>{logInUser.username}</h2>
                    }
                    {
                        logInUser.email && <button onClick={ () => setLoggedInUser(!localStorage.removeItem('user') )} className='btn btn-danger'>LogOut</button>
                    }
                   </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardHeader;