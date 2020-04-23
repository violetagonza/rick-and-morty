import React, { useEffect, useState } from 'react';
import Input from './Input';
import CharacterList from './CharacterList';
import get from '../services/get';
const App = () => {
  const [charactersInfo, setCharactersInfo] = useState([]);
  const [charactersNames, setCharactersnames] = useState('');

  //Llamada a la Api
  useEffect(() => {
    get().then((characterData) => {
      setCharactersInfo(characterData);
    });
  }, []);

  //Handler del input
  const handleChange = (value) => {
    // Filtro el estado characterInfo con lo que la usuaria escribe en el input, meto los resultados en el estado charactersNames
    const filteredCharacter = charactersInfo.filter((character) => {
      return character.name.toUpperCase().includes(value.toUpperCase());
    });
    setCharactersnames(filteredCharacter);
  };

  return (
    <main>
      <Input handleChange={handleChange} />
      <CharacterList charactersInfo={charactersNames === '' ? charactersInfo : charactersNames} />
    </main>
  );
};

export default App;
