import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import Sidebar from '../Sidebar/Sidebar';
import './Main.css'

const Main = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(exercises => setExercises(exercises))
    }, [])

    const addToList = (exercise) => {
        const { id, time } = exercise;
        const newTime = exerciseTime + parseInt(time);
        setExerciseTime(newTime);
        const element = document.getElementById(id);
        element.innerText = 'Added to List';
    }

    return (
        <div className='main'>
            <Exercises exercises={exercises} addToList={addToList}></Exercises>
            <Sidebar exerciseTime={exerciseTime}></Sidebar>
        </div>
    );
};

export default Main;