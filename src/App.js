import React, { useState, useEffect } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [localion, setLocalion] = useState({});

  useEffect(() => {
    const watchid = navigator.geolocation.watchPosition(handlePositionReceived);
    return () => navigator.geolocation.clearWatch(watchid);
  }, []);
  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;
    setLocalion({ latitude, longitude });
  }

  /*
  useEffect(async () => {
    const response = await fetch(
      "https://api.github.com/users/Pro-Solucoes/repos"
    );
    const data = await response.json();
    setRepositories(data);
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Voce tem ${filtered.length} favoritos`;
  }, [repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });
    setRepositories(newRepositories);*/

  /* return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name} - {repo.favorite && <span>Favotito</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </>
  );*/
  return (
    <>
      Latitude:{localion.latitude}
      <br />
      longitude:{localion.longitude}
    </>
  );
}
