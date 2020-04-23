import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Route, Switch } from 'react-router-dom';
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

  const handleCharacterDetail = (props) => {
    const characterId = props.match.params.id;
    const foundCharacter = charactersInfo.find((character) => {
      console.log(character.id, characterId);

      return character.id === parseInt(characterId);
    });

    return <CharacterDetail characterInfo={foundCharacter} />;
  };
  return (
    <>
      <main>
        <Filter handleChange={handleChange} />
        <CharacterList handleClick={handleCharacterDetail} charactersInfo={charactersNames === '' ? charactersInfo : charactersNames} />
      </main>

      <Switch>
        <Route path='/character/:id' render={handleCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
