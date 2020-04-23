import React, { useEffect, useState } from 'react';
import Input from './Input';
import CharacterList from './CharacterList';
import get from '../services/get';
const App = () => {
  const [charactersInfo, setCharactersInfo] = useState([]);
  const [CharactersNames, setCharactersnames] = useState([]);

  //Llamada a la Api
  useEffect(() => {
    get().then((characterData) => {
      setCharactersInfo(characterData);
    });
  }, []);

  const handleChange = (value) => {
    console.log(value);
    const filteredCharacter = charactersInfo.filter((character) => {
      return character.name.toUpperCase().includes(value.toUpperCase());
    });
    setCharactersnames(filteredCharacter);
    console.log(filteredCharacter);
  };

  return (
    <main>
      <Input handleChange={handleChange} />
      <CharacterList charactersInfo={CharactersNames} />
    </main>
  );
};

export default App;
