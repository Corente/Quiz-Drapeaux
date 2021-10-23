import React, { useState } from 'react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import Score from '../components/Score';
import { useTimer } from 'react-timer-hook';

const Quizz = () => {
    const [Finished,SetFinished] = useState(false);
    const [Points, SetPoints] = useState(0);


    function Timer({ expiryTimestamp }) {
        const { seconds, minutes } = useTimer({ expiryTimestamp, onExpire: () => {SetFinished(true);} });

        return (
            <div className="Timer">
                <div style={{ fontSize: '100px' }}>
                    <span>{seconds + (minutes * 60)}</span>
                </div>
            </div>
        );
    };

    
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    
    return (
        <div className="Quizz">
            <Navigation />
            <h1>Ici c'est le quizz</h1>
            
            { Finished ? (
                <div>
                    <Score Points={Points} />
                </div>
            ) : (
                <div>
                    <h2>Score: { Points }</h2>
                    <Timer expiryTimestamp={time} />
                    <Card SetPoints={SetPoints} Points={Points}/>
                </div>
                
            )}
        </div>
    );
};

export default Quizz;
