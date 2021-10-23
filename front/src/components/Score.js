import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Score = (props) => {
  const [Pseudo, SetPseudo] = useState("");

  const history = useHistory();

  return (
    <div>
      <h1>Bravo tu as un score de:</h1>
      <h1>{props.Points}</h1>
      <br />
      <h1>Veus-tu enregistrer ton score ?</h1>
      <input
        value={Pseudo}
        type="text"
        placeholder="Ton pseudo ici"
        onChange={(e) => SetPseudo(e.target.value)}
      />
      <button>Oui enregistre le avec ce pseudo</button>
      <button onClick={() => history.push("/")}>Non ca ira</button>
    </div>
  );
};

export default Score;
