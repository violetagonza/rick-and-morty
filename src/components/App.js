import React, { useEffect, useState } from 'react';
import get from '../services/get';
const App = () => {
  const [charactersInfo, setCharactersInfo] = useState([]);
  useEffect(() => {
    get().then((characterData) => {
      setCharactersInfo(characterData);
    });
  }, []);
  console.log(charactersInfo);
  const htmlCode = charactersInfo.map((character) => {
    return (
      <li key={character.id}>
        <img src={character.photo} alt={character.name} />
        <p> {character.name}</p>
        <p> {character.species}</p>
      </li>
    );
  });
  return <ul>{htmlCode}</ul>;
};

export default App;
