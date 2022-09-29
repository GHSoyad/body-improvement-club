import React from 'react';
import './Exercise.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

const Exercise = (props) => {
    const { exercise, addToList } = props;
    const { id, name, image, description, time } = exercise;

    return (
        <div className='exercise'>
            <div>
                <img src={image} alt="" />
                <h3>{name}</h3>
            </div>
            <p><span className='bold'>Description:</span> {description}</p>
            <div>
                <p><span className='bold'>Time Needed:</span> {time} Seconds</p>
                <button onClick={() => addToList(exercise)} id={id} className='exercise-btn'>
                    <p>Add to List</p>
                    <FontAwesomeIcon icon={faClockRotateLeft} />
                </button>
            </div>
        </div>
    );
};

export default Exercise;