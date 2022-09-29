import React from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = (props) => {
    const { exercises } = props;
    console.log(exercises)

    return (
        <div className='exercises'>
            {
                exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id}></Exercise>)
            }
        </div>
    );
};

export default Exercises;