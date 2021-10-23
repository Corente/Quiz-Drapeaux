import React, { useState } from 'react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import Score from '../components/Score';
import Timer from '../components/Timer';


const Quizz = () => {
    const [Finished,SetFinished] = useState(false);
    const [Points, SetPoints] = useState(0);
    
    const time = new Date();
    time.setSeconds(time.getSeconds() + 15);

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
                    <Timer expiryTimestamp={time} SetFinished={SetFinished} />
                    <Card SetPoints={SetPoints} Points={Points}/>
                </div>
                
            )}
        </div>
    );
};

export default Quizz;
