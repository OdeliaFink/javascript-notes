//SEE IF THERES AN EXISTING SPACE:

let password = 'I am Odelia';
password.indexOf(' ') - 1; //this would show if there isn't a space

//ARRAYS: if we want to see the last item

let colors = ['blue', 'purple', 'green', 'red', 'violet'];
colors[colors.length - 1];

//CONCAT: can do for multiple arrays just add it within concat()

let array1 = ['apples', 'tomatoes', 'potatoes'];
let array2 = ['carrot', 'ginger'];

array2.concat(array1); //[ 'carrot', 'ginger', 'apples', 'tomatoes', 'potatoes' ]

//INCLUDES:
//let colors = ['blue', 'purple', 'green', 'red', 'violet'];
//colors.includes('fish'); //would return false

//SLICE:
let animals = ['bear', 'horse', 'cat', 'dog', 'monkey'];
animals.slice(1); //"horse", "cat", "dog", "monkey"
animals.slice(1, 2); //"horse"
animals.slice(-1); //"monkey"
animals.slice(3, 4); //"dog"

//SPLICE: .splice(startId, deleteCount, itemsToInsert--using string)

animals.splice(1); //[ 'horse', 'cat', 'dog', 'monkey' ]

//SORTING: permanent sort but not numeric. default sort is based off of string chatacter codes

let people = ['odelia', 'galit', 'bob', 'nick', 'sarah', 'karma', 'joe'];
console.log(people.sort());
console.log(people);

let numbers = [11, 101, 93, 44, 21, 53];
numbers.sort(); //sorts by utf code not actual value
