import React from 'react';
import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
  return (
    <li key={props.character.id}>
      <Link to={`/character/${props.character.id}`}>
        <img src={props.character.photo} alt={props.character.name} />
        <p> {props.character.name}</p>
        <p> {props.character.species}</p>
      </Link>
    </li>
  );
};
export default CharacterCard;
