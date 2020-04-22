import React, { useEffect, useState } from 'react';
import get from '../services/get';
const App = () => {
  const [charactersInfo, setCharactersInfo] = useState([]);
  useEffect(() => {
    get().then((characterData) => {
      setCharactersInfo(characterData);
    });
  }, []);
  console.log(charactersInfo);

  return <main></main>;
};

export default App;
