import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/list.scss';
const CharacterList = (props) => {
  let htmlCode;

  htmlCode = props.charactersInfo.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return <ul className='list'>{htmlCode}</ul>;
};

export default CharacterList;
