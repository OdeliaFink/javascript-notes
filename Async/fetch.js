const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/gender/1')
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then((data) => {
    const pokeURL = data.required_for_evolution[0];
    return fetch(pokeURL);
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Something went wrong!!!!');
    console.log(err);
  });
