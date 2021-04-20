import React from 'react';
import './Header.css'
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import HeaderMainContent from '../HeaderMainContent/HeaderMainContent';


const Header = () => {
    return (
        <>
        <HeaderNavbar/>
        <header className='header-background'>
           <HeaderMainContent/>
        </header>
        </>
        
    );
};

export default Header;