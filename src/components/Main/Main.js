import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import './Main.css'

const Main = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(exercises => setExercises(exercises))
    }, [])

    return (
        <div>
            <div>
                <Exercises exercises={exercises}></Exercises>
            </div>
        </div>
    );
};

export default Main;