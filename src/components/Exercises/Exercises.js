import React from 'react';

const Exercises = (props) => {
    const { exercises } = props;
    console.log(exercises)

    return (
        <div>
            {
                exercises.map(exercise => console.log(exercise))
            }
        </div>
    );
};

export default Exercises;