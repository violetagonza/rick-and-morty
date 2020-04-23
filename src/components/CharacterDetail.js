import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  console.log(props.characterInfo);
  if (props.characterInfo === undefined) {
    return (
      <aside>
        <Link to='/'> Volver </Link>
        <p>Aquí no hay nada</p>
      </aside>
    );
  } else {
    return (
      <aside>
        <Link to='/'> Volver </Link>
        <img src={props.characterInfo.photo} alt={props.characterInfo.name} />
        <h4>{`Nombre:${props.characterInfo.name}`}</h4>
        <p>{`Estatus: ${props.characterInfo.status}`}</p>
        <p>{`Especie: ${props.characterInfo.species}`}</p>
        <p>{`Origen: ${props.characterInfo.origin}`}</p>
        <p>{`Episodios: ${props.characterInfo.episodes}`}</p>
      </aside>
    );
  }
};
export default CharacterDetail;
