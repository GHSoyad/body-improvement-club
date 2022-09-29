import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='user'>
                <img src="images/user.jpeg" alt="" />
                <div className='user-details'>
                    <p><span className='bold'>Name:</span> Golam Hasnain Soyad</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="physics">
                <div className='physic'>
                    <p>70kg</p>
                    <p className='bold'>Weight</p>
                </div>
                <div className='physic'>
                    <p>165cm</p>
                    <p className='bold'>Height</p>
                </div>
                <div className='physic'>
                    <p>O+</p>
                    <p className='bold'>Blood</p>
                </div>
            </div>
            <p className='bold side-header'>Add a Break</p>
            <div className='break'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <p className='bold side-header'>Exercise Details</p>
            <div className='exercise-details'>
                <div className='exercise-detail'>
                    <p className='bold'>Exercise Time</p>
                    <p>Seconds</p>
                </div>
                <div className='exercise-detail'>
                    <p className='bold'>Break Time</p>
                    <p>Seconds</p>
                </div>
            </div>
            <button className='complete'>Activity Complete</button>
        </div>
    );
};

export default Sidebar;