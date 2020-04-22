import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import get from '../services/get';
const App = () => {
  const [charactersInfo, setCharactersInfo] = useState([]);

  //Llamada a la Api
  useEffect(() => {
    get().then((characterData) => {
      setCharactersInfo(characterData);
    });
  }, []);

  return (
    <main>
      <CharacterList charactersInfo={charactersInfo} />
    </main>
  );
};

export default App;
