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
