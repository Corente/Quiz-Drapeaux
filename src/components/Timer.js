import React from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = (props) => {
    const expiryTimestamp = props.expiryTimestamp;
    const { seconds, minutes } = useTimer({ expiryTimestamp, onExpire: () => {props.SetFinished(true);} });

    return (
        <div className="Timer">
            <div style={{ fontSize: '100px' }}>
                <span>{seconds + (minutes * 60)}</span>
            </div>
        </div>
    );
};


export default Timer;