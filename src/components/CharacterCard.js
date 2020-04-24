import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/card.scss';
const CharacterCard = (props) => {
  if (props.character.species === 'Alien') {
    props.character.species = props.character.species + '👽';
  }
  if (props.character.species === 'Human') {
    props.character.species = 'Humano 👦';
  }
  if (props.character.gender === 'Female') {
    props.character.species = 'Humana 👩';
    props.character.status = 'Muerta 💀';
  }
  if (props.character.status === 'Alive') {
    props.character.status = 'Con vida 🤘';
  }
  if (props.character.status === 'Dead') {
    props.character.status = 'Muerto 💀';
  }
  if (props.character.status === 'unknown') {
    props.character.status = 'Desconocido';
  }
  if (props.character.origin === 'Earth (C-137)' || props.character.origin === 'Earth (C-137)') {
    props.character.origin = 'La Tierra';
  }
  if (props.character.origin === 'unknown') {
    props.character.origin = 'Desconocido';
  }
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
