//LOOPS

const myStudents = [
  {
    firstName: 'Odelia',
    grade: 87,
  },
  {
    firstName: 'Bob',
    grade: 78,
  },
  {
    firstName: 'Nick',
    grade: 89,
  },
];

for (let i = 0; i < myStudents.length; i++) {
  console.log(`${myStudents[i].firstName}`);
}
//To access within object after looping you need to index at [i] and then access the individual object
//If you just do myStudents[i], it'll print out each individual object
//could store as variable to do myStudents[i]
