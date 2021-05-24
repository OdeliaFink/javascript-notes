const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward',
];

const [first, second, third] = raceResults;
console.log(third);

//OBJECT DESTRUCTURING
//make variable based off the name of the property
//use property name to unpack

const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

// const {
//   first,
//   last,
//   time
// } = runner;

const { country: nation, title: honorific } = runner;

const { first, last, ...other } = runner;

const results = [
  {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia',
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States',
  },
];
// NESTED DESTRUCTURING
const [{ first: goldWinner }, { country }] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"
