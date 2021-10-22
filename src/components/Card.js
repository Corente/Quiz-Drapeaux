import React, { useEffect, useState } from 'react';
import { db } from "./db.js";

const Card = () => {
    const [Guess, SetGuess] = useState(0);
    const [Reponse, SetReponse] = useState("");
    const [First, SetFirst] = useState(true);
    const data = JSON.parse(db);

    useEffect(() => {
        
        if (First)
        {
            SetFirst(false);
            var rd = Math.floor(Math.random() * 195);
            SetGuess(rd);
        }

        const CheckAnswer = () => {
            for (var tmp in data[Guess].Nom)
            {
                if (data[Guess].Nom[tmp].toLocaleLowerCase() === Reponse.toString().toLocaleLowerCase())
                {
                    var rd = Math.floor(Math.random() * 195);
                    SetGuess(rd);
                    SetReponse("");
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
        </div>
    );
};

//

export default Card;