function average(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  let res = Math.round(total / arr.length);
  return res;
}

console.log(average([2, 4, 5]));
