//Async functions always return a promise
//FOR EXAMPLE:
async function greet() {
  return 'Hello';
}

greet().then((val) => {
  console.log('PROMISE RESOLVED WITH: ', val);
});

async function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw 'x AND Y MUST BE NUmBER';
  }
  return x + y;
}

function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
      reject('x AND Y MUST BE NUmBER');
    }
    resolve(x + y);
  });
}

add(5, 6)
  .then((val) => {
    console.log('PROMISE REOLVED WITH: ', val);
  })
  .catch((err) => {
    console.log('PROMISE REJECTED WITH ', err);
  });
