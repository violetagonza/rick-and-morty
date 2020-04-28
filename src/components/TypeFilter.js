import React from 'react';

const TypeFilter = (props) => {
  const handleChange = (ev) => {
    props.handleChange({
      key: 'type',
      value: ev.target.value,
    });
  };
  return (
    <label html='type'>
      <input onChange={handleChange} className='form--input' type='text' name='type' placeholder='Busca un tipo de raza'></input>
    </label>
  );
};
export default TypeFilter;
