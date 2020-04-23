import React from 'react';
import CharacterCard from './CharacterCard';
const CharacterList = (props) => {
  console.log(props);

  const htmlCode = props.charactersInfo.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return <ul>{htmlCode}</ul>;
};

export default CharacterList;
