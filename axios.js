//axios is an extrernal library that uses fetch behind the scenes.
const axios = require('axios');
//can change request to post or put
// axios
//   .get('https://swapi.dev/api/planets')
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log('IN CATCH');
//   });

//chaining axious:

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets') => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log(err);
    console.log('IN CATCH');
  });
