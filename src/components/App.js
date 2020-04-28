import React, { useEffect, useState, useReducer } from 'react';
import Filter from './Filter';
import TypeFilter from './TypeFilter';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Route, Switch, Link } from 'react-router-dom';
import logo from '../images/Rick_and_Morty-logo.png';
import get from '../services/get';
import '../stylesheets/general-layout.scss';
const App = () => {
  const [charactersInfo, setCharactersInfo] = useState([]);
  const [charactersNames, setCharactersnames] = useState('');
  const [charactersType, setCharactersType] = useState('');
  const [inputValue, setInputValue] = useState('');

  //Llamada a la Api
  useEffect(() => {
    get().then((characterData) => {
      setCharactersInfo(characterData);
    });
  }, []);

  //Handler del input
  const handleChange = (data) => {
    if (data.key === 'name') {
      setCharactersnames(data.value);
    } else {
      setCharactersType(data.value);
    }
    // Filtro el estado characterInfo con lo que la usuaria escribe en el input, meto los resultados en el estado charactersNames
    // setInputValue(value);
    // const noFound = [{ name: `Lo sentimos: ${value} no se ha encontrado`, photo: 'https://www.cordesansantiago.cl/wp-content/uploads/2016/11/blank-profile-picture-973460_960_720.png', id: 'akjhsJK' }];
    // const filteredCharacter = charactersInfo.filter((character) => {
    //   return character.name.toUpperCase().includes(value.toUpperCase());
    // });
    console.log(data);

    // .filter((character) => {
    //   return character.type.toUpperCase().includes()
    // });

    // if (filteredCharacter.length === 0) {
    //   setCharactersnames(noFound);
    // } else {
    //   setCharactersnames(filteredCharacter);
    // }
  };
  console.log(charactersNames, charactersType);

  //Renderizo el modal
  const handleCharacterDetail = (props) => {
    const characterId = props.match.params.id;
    const foundCharacter = charactersInfo.find((character) => {
      return character.id === parseInt(characterId);
    });
    return <CharacterDetail characterInfo={foundCharacter} />;
  };

  const handleRestore = () => {
    setInputValue('');
    setCharactersnames('');
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const filteredCharacter = charactersInfo
    .filter((character) => {
      return character.name.includes(charactersNames);
    })
    .filter((character) => {
      return character.type.includes(charactersType);
    });
  return (
    <>
      <header className='header'>
        <Link title='Volver' onClick={handleRestore} to='/'>
          <img className='header--img' src={logo} alt='Rick y Morty' />
        </Link>
      </header>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <main className='main'>
              <form onSubmit={handleSubmit} className='form'>
                <Filter handleChange={handleChange} />
                <TypeFilter handleChange={handleChange} />
              </form>
              <CharacterList handleClick={handleCharacterDetail} charactersInfo={filteredCharacter} />
            </main>
          )}
        />
        <Route path='/character/:id' render={handleCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
