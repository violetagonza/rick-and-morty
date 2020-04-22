const get = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let characterData = [];
      data.results.map((result) => {
        return characterData.push({
          id: result.id,
          name: result.name,
          photo: result.image,
          status: result.status,
          species: result.species,
          origin: result.origin.name,
          episodes: parseInt(result.episode.length),
        });
      });
      return characterData;
    });
};
export default get;
