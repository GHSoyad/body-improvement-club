import React from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = (props) => {
    const { exercises, addToList } = props;

    return (
        <div className='exercises'>
            {
                exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id} addToList={addToList}></Exercise>)
            }
        </div>
    );
};

export default Exercises;