import React, { useEffect, useState } from 'react';

const Main = () => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(exercises => setExercises(exercises))
    }, [])

    console.log(exercises);


    return (
        <div>

        </div>
    );
};

export default Main;