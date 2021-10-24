import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Score = (props) => {
  const [Pseudo, SetPseudo] = useState("");

  const history = useHistory();

  function SaveScore()
  {
    var address = "http://127.0.0.1:5000/api/leaderboard";
    var score = props.Points;
    var data = JSON.stringify({"name":Pseudo, "score":score});
    var options = {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'},
      body: data
    };
    fetch(address, options);
    history.push("/Classement")
  }

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
      <button onClick={() => SaveScore()}>Oui enregistre le avec ce pseudo</button>
      <button onClick={() => history.push("/")}>Non ca ira</button>
    </div>
  );
};

export default Score;
