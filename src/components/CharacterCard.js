import React from 'react';

const CharacterCard = (props) => {
  return (
    <li key={props.character.id}>
      <img src={props.character.photo} alt={props.character.name} />
      <p> {props.character.name}</p>
      <p> {props.character.species}</p>
    </li>
  );
};
export default CharacterCard;
