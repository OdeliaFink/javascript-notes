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

//AVERAGE GRADE

let total = 0; // won't properly add if in loop
for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;
}
console.log(total / myStudents.length);

//REVERSE A WORD

const word = 'stressed';
let reversedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
  //console.log(reversedWord) > prints out d, de, des, dess etc
}

//NESTED LOOPS

const game = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let total = 0;
for (let i = 0; i < game.length; i++) {
  let row = game[i];
  for (let j = 0; j < row.length; j++) {
    //console.log(row[i]) prints full array each of them [], []
    //console.log(row[j]) prints each individual number within array
    total += row[j];
  }
}
