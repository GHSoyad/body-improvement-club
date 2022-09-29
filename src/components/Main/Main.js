import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import Sidebar from '../Sidebar/Sidebar';
import './Main.css'

const Main = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(exercises => setExercises(exercises))
    }, [])

    return (
        <div className='main'>
            <Exercises exercises={exercises}></Exercises>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Main;