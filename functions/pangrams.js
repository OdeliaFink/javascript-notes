function isPangram(sentence) {
  for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
    if (sentence.indexOf(letter) === -1)
      //doesn't exist
      return false;
  }
  return true;
}

console.log(isPangram('the quick brown fox jumps over the lazy dog'));
