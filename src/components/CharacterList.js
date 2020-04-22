import React from 'react';
const CharacterList = (props) => {
  console.log(props);

  const htmlCode = props.charactersInfo.map((character) => {
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

export default CharacterList;
