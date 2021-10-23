import React from 'react';
import { scoreboard } from "../components/Scoreboard"

const Classement = () => {
    scoreboard = JSON.parse(scoreboard)

    return (
        <div className="Classement">
            <h1>Classement</h1>
            <ul>
                {scoreboard.map((data) => (<li>{data}</li>))}
            </ul>
        </div>
    );
};

export default Classement;