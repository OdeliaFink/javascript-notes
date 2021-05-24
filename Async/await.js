const { default: axios } = require('axios');

// function getPlanets() {
//   return axios.get('https://swapi.dev/api/planets');
// }

// getPlanets().then((res) => {
//   console.log(res.data);
// });

//waits until promise is resolved
//must be an async functions
// async function getPlanets() {
//   const res = await axios.get('https://swapi.dev/api/planetz');
//   console.log(res.data);
// }

// getPlanets().catch((err) => {
//   console.log('IN  CATCH!!!');
//   console.log(err);
// });

async function getPlanets() {
  try {
    const res = await axios.get('https://swapi.dev/api/planetz');
    console.log(res.data);
  } catch (e) {
    console.log('IN CATCH', e);
  }
}

getPlanets();
