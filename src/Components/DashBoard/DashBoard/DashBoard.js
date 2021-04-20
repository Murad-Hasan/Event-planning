import React from 'react';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import SideBar from '../SideBar/SideBar';
import './DashBoard.css'
const DashBoard = () => {
    return (
        <div>
            <DashBoardHeader/>
            <SideBar/>
        </div>
    );
};

export default DashBoard;