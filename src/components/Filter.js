import React from 'react';
import '../stylesheets/form.scss';
const Input = (props) => {
  const handleChange = (ev) => {
    props.handleChange({
      key: 'name',
      value: ev.target.value,
    });
  };

  return (
    <label htmlFor='name'>
      <input value={props.inputValue} onChange={handleChange} className='form--input' type='text' name='name' id='name' placeholder='Busca un personaje'></input>
    </label>
  );
};
export default Input;
