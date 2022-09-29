import React from 'react';
import logo from '../../logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt="logo" />
                <h2>BODY IMPROVEMENT CLUB</h2>
            </div>
            <p className='bold'>Choose which exercises you want to do today!!</p>
        </div>
    );
};

export default Header;