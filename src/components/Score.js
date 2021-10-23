import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { scoreboard } from "./scoreboard"

const Score = (props) => {
    const [Pseudo, SetPseudo] = useState("");
    const points = props.Points;

    const history = useHistory();
    const routeChange = (path) =>{ 
        history.push(path);
    }

    function SaveScore()
    {
        scoreboard = JSON.parse(scoreboard);
        scoreboard[Pseudo] = points;
        JSON.stringify(scoreboard);
        routeChange("/Classement");
    }

    return (
        <div>
            <h1>Bravo tu as un score de:</h1>
            <h1>{ points }</h1>
            <br/>
            <h1>Veus-tu enregistrer ton score ?</h1>
            <input value={ Pseudo } type="text" placeholder="Ton pseudo ici" onChange={(e) => SetPseudo(e.target.value)} />
            <button onClick={SaveScore}>Oui enregistre le avec ce pseudo</button>
            <button onClick={routeChange("/")} >Non ca ira</button>
        </div>
    );
};

export default Score;