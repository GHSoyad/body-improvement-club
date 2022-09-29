import React, { useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import './Sidebar.css'

const Sidebar = (props) => {
    const { exerciseTime } = props;
    const breakTimes = [10, 20, 30, 40, 50];

    const [breakTime, setBreakTime] = useState(0);

    const addBreakTime = (time) => {
        const newBreakTime = time;
        setBreakTime(newBreakTime);
        const activeBtn = document.getElementById(`breakTime${time}`);
        const restBtns = document.querySelectorAll('.break-btn');
        console.log(restBtns)
        for (let button of restBtns) {
            button.classList.remove('active-btn');
            console.log(button)
        }
        activeBtn.classList.add('active-btn');

    }


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
                {
                    breakTimes.map((time, index) => <BreakTime time={time} key={index} addBreakTime={addBreakTime}></BreakTime>)
                }
            </div>
            <p className='bold side-header'>Exercise Details</p>
            <div className='exercise-details'>
                <div className='exercise-detail'>
                    <p className='bold'>Exercise Time</p>
                    <p><span className='bold'>{exerciseTime} </span> Seconds</p>
                </div>
                <div className='exercise-detail'>
                    <p className='bold'>Break Time</p>
                    <p><span className='bold'>{breakTime} </span> Seconds</p>
                </div>
            </div>
            <button className='complete'>Activity Complete</button>
        </div>
    );
};

export default Sidebar;