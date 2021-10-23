import React, { useEffect, useState } from 'react';
import { db } from "./db.js";

const Card = (props) => {
    const [Guess, SetGuess] = useState(0);
    const [Reponse, SetReponse] = useState("");
    const [First, SetFirst] = useState(true);
    const data = JSON.parse(db);

    function ChangeFlag()
    {
        var rd = Math.floor(Math.random() * 195);
        SetGuess(rd);
        SetReponse("");
    }

    useEffect(() => {
        
        if (First)
        {
            SetFirst(false);
            ChangeFlag();
        }

        const CheckAnswer = () => {
            for (var tmp in data[Guess].Nom)
            {
                if (data[Guess].Nom[tmp].toLocaleLowerCase() === Reponse.toString().toLocaleLowerCase())
                {
                    ChangeFlag();
                    props.SetPoints(props.Points + 1);
                }
            }
        };

        CheckAnswer();
    }, [Reponse]);

    return (
        <div className="Card">
            <img src={data[Guess].ImageURL} alt="Le drapeau à deviner" />
            <br/>
            <input value={ Reponse } type="text" onChange={(e) => SetReponse(e.target.value)} placeholder="Quel est le nom de pays associé à ce drapeau"/>
            <button onClick={ChangeFlag}>Pass</button>
        </div>
    );
};

export default Card;