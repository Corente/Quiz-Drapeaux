import React, { useState } from 'react';

const Score = () => {
    const [Points, SetPoints] = useState(0);
    const [Pseudo, SetPseudo] = useState(0);

    return (
        <div>
            <h1>Bravo tu as un score de:</h1>
            <h1>{ Points }</h1>
            <h1>Veus-tu enregistrer ton score ?</h1>
            <input value={ Pseudo } type="text" placeholder="Ton pseudo ici"/>
            <button>Oui enregistre le avec ce nom</button>
            <button>Non ca ira</button>
        </div>
    );
};

export default Score;