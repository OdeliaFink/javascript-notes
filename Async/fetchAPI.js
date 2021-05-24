// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function () {
//   console.log('FIRST REQUEST WORKED!!!');
//   const data = JSON.parse(this.responseText);
//   const filmURL = data.results[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener('load', function () {
//     console.log('SECOND REQUEST WORKED!!!');
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData.title);
//   });
//   filmReq.addEventListener('error', function (e) {
//     console.log('ERROR!!', e);
//   });
//   filmReq.open('GET', filmURL);
//   filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
//   console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/gender/3/')
  .then((response) => {
    response.json().then((data) => {
      //call JSON when it finishes we can have access to the data
      console.log('This is the data', data);
    });
  })
  .catch((err) => {
    console.log('SOMETHINGS WRONG WITH FETCH');
    console.log(err);
  });
