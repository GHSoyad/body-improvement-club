import React from 'react';
import './BreakTime.css'

const BreakTime = (props) => {
    const { time, addBreakTime } = props;
    return (
        <div>
            <button onClick={() => addBreakTime(time)} id={`breakTime${time}`} className='break-btn'>{time}s</button>
        </div>
    );
};

export default BreakTime;