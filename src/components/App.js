import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Route, Switch } from 'react-router-dom';
import logo from '../images/Rick_and_Morty-logo.png';
import get from '../services/get';
import '../stylesheets/general-layout.scss';
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
    const noFound = [{ name: `Lo sentimos: ${value} no se ha encontrado`, photo: 'https://www.cordesansantiago.cl/wp-content/uploads/2016/11/blank-profile-picture-973460_960_720.png', id: 'akjhsJK' }];
    const filteredCharacter = charactersInfo.filter((character) => {
      return character.name.toUpperCase().includes(value.toUpperCase());
    });
    console.log(filteredCharacter);

    if (filteredCharacter.length === 0) {
      setCharactersnames(noFound);
    } else {
      setCharactersnames(filteredCharacter);
    }
  };
  console.log(charactersNames);

  //Renderizo el modal

  const handleCharacterDetail = (props) => {
    const characterId = props.match.params.id;
    const foundCharacter = charactersInfo.find((character) => {
      return character.id === parseInt(characterId);
    });

    return <CharacterDetail characterInfo={foundCharacter} />;
  };
  return (
    <>
      <header className='header'>
        <img className='header--img' src={logo} alt='Rick y Morty' />
      </header>
      <main className='main'>
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
