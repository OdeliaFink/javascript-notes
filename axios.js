//axios is an extrernal library that uses fetch behind the scenes.
const axios = require('axios');
//can change request to post or put
axios
  .get('https://swapi.dev/api/planets')
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
    console.log('IN CATCH');
  });
