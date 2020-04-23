import React from 'react';

const Input = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleChange(ev.target.value);
  };
  return (
    <form onChange={handleChange}>
      <label htmlFor='name'>
        <input type='text' name='name' id='name'></input>
      </label>
    </form>
  );
};
export default Input;
