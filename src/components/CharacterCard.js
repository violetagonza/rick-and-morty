import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/card.scss';
const CharacterCard = (props) => {
  return (
    <li className='card' key={props.character.id}>
      <Link className='card--link' to={`/character/${props.character.id}`}>
        <div className='card-img'>
          <img className='card--img__photo' src={props.character.photo} alt={props.character.name} />
        </div>
        <div className='card--text'>
          <h3> {props.character.name}</h3>
          <p> {props.character.species}</p>
        </div>
      </Link>
    </li>
  );
};
export default CharacterCard;
