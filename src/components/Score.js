import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { scoreboard } from "./Scoreboard"


const Score = (props) => {
    const [Pseudo, SetPseudo] = useState("");

    const history = useHistory();

    const routeChange = (path) =>{ 
        history.push(path);
    }
    
    function SaveScore(points)
    {
        scoreboard = JSON.parse(scoreboard);
        scoreboard[Pseudo] = points;
        JSON.stringify(scoreboard);
        routeChange("/Classement");
    }

    return (
        <div>
            <h1>Bravo tu as un score de:</h1>
            <h1>{ props.Points }</h1>
            <br/>
            <h1>Veus-tu enregistrer ton score ?</h1>
            <input value={Pseudo} type="text" placeholder="Ton pseudo ici" onChange={(e) => SetPseudo(e.target.value)} />
            <button>Oui enregistre le avec ce pseudo</button>
            <button>Non ca ira</button>
        </div>
    );
};


export default Score;