import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Score = (props) => {
  const [Pseudo, SetPseudo] = useState("");

  const history = useHistory();

  function SaveScore()
  {
    var address = "https://api.quiz.ourvoy.fr/leaderboard/";
    //var address = "http://127.0.0.1:5000/leaderboard";
    var score = props.Points;
    var data = JSON.stringify({"name":Pseudo, "score":score});
    var options = {
      method: 'POST',
      mode: "cors",
      headers: {'Content-Type': 'application/json'},
      body: data
    };
    fetch(address, options);
    history.push("/");
  }

  return (
    <div className="Score">
      <h1>Bravo tu as un score de:</h1>
      <h1>{props.Points}</h1>
      <br />
      <h1>Veux-tu enregistrer ton score ?</h1>
      <input
        value={Pseudo}
        type="text"
        placeholder="Ton pseudo ici"
        onChange={(e) => SetPseudo(e.target.value)}
      />
      <button className="yes" onClick={() => SaveScore()}>Oui enregistre le avec ce pseudo</button>
      <button className="no" onClick={() => history.push("/")}>Non ca ira</button>
    </div>
  );
};

export default Score;
