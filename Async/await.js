const { default: axios } = require('axios');

// function getPlanets() {
//   return axios.get('https://swapi.dev/api/planets');
// }

// getPlanets().then((res) => {
//   console.log(res.data);
// });

//waits until promise is resolved
//must be an async functions
async function getPlanets() {
  const res = await axios.get('https://swapi.dev/api/planets');
  console.log(res.data);
}

getPlanets();
