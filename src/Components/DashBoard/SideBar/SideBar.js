import React from 'react';
import SideBarLink from './SideBarLink';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="row m-0">
            <div className="col-md-3">
            <div className='side-bar'>
            <SideBarLink/>
        </div>
            </div>
            <div className="col-md-9 text-center mt-5">
                    <h2>Welcome to  DashBoard</h2>
                    <img height='400px' src="https://i.ibb.co/B29kLYy/download.jpg" alt=""/>
            </div>
        </div>
    );
};

export default SideBar;