import React, { useEffect, useState } from "react";


const Classement = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, SetData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/leaderboard/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          SetData(result);
          console.log(data);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="Classement">
        <h1>Classement</h1>
        <ul>
          {data.map(data => (
              <li key={data.name}>{data.name}:{data.score}</li>
            ))}
        </ul>
      </div>
    );
  }
};

export default Classement;
