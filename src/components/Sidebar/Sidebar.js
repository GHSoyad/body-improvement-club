import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import './Sidebar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = (props) => {
    const { exerciseTime } = props;
    const breakTimes = [10, 20, 30, 40, 50];

    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const storedBreakTime = localStorage.getItem('breakTime');
        if (storedBreakTime) {
            setBreakTime(storedBreakTime)
        }
    }, [])

    const addBreakTime = (time) => {
        const newBreakTime = time;
        setBreakTime(newBreakTime);

        const activeBtn = document.getElementById(`breakTime${time}`);
        const restBtns = document.querySelectorAll('.break-btn');
        for (let button of restBtns) {
            button.classList.remove('active-btn');
        }
        activeBtn.classList.add('active-btn');

        localStorage.setItem('breakTime', newBreakTime);
    }

    const notify = () => toast.success('Wow so easy! You have completed todays exercise!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    });


    return (
        <div className='sidebar'>
            <div className='sidebar-div'>
                <div className='user'>
                    <img src="images/user.jpeg" alt="" />
                    <div className='user-details'>
                        <p className='bold'>Golam Hasnain Soyad</p>
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
            </div>
            <div className='sidebar-div'>
                <p className='bold side-header'>Add a Break</p>
                <div className='break'>
                    {
                        breakTimes.map((time, index) => <BreakTime time={time} key={index} addBreakTime={addBreakTime}></BreakTime>)
                    }
                </div>
            </div>
            <div className='sidebar-div'>
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
            </div>
            <button onClick={notify} className='complete'>Activity Completed</button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
            />
        </div>
    );
};

export default Sidebar;