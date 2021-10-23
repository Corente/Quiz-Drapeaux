import React, { useEffect, useState } from 'react';

const Card = (props) => {
    const [Reponse, SetReponse] = useState("");
    const [First, SetFirst] = useState(true);
    const [ImageURL, SetImageURL] = useState("");
    const [Nom, SetNom] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    function ChangeFlag()
    {
        var rd = Math.floor(Math.random() * 195);
        var address = "http://127.0.0.1:5000/api/country/" + rd;
        console.log(address);
        fetch(address)
            .then(res => res.json())
            .then(
                (result) => {
                setIsLoaded(true);
                console.log(result);
                SetImageURL(result.ImageURL);
                SetNom(result.Nom);
                },
                (error) => {
                setIsLoaded(true);
                setError(error);
                }
            )
        SetReponse("");
    }

    
    useEffect(() => {
        
        if (First)
        {
            SetFirst(false);
            ChangeFlag();
        }

        const CheckAnswer = () => {
            for (var tmp in Nom)
            {
                if (Nom[tmp].toLocaleLowerCase() === Reponse.toString().toLocaleLowerCase())
                {
                    ChangeFlag();
                    props.SetPoints(props.Points + 1);
                }
            }
        };

        CheckAnswer();
    }, [Reponse]);

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div className="Card">
                <img src={ImageURL} alt="Le drapeau à deviner" />
                <br/>
                <input value={ Reponse } type="text" onChange={(e) => SetReponse(e.target.value)} placeholder="Quel est le nom de pays associé à ce drapeau"/>
                <button onClick={ChangeFlag}>Pass</button>
            </div>
        );
    }
};

export default Card;