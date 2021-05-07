function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
    if (lowerCased.indexOf(letter) === -1)
      //doesn't exist
      return false;
  }
  return true;
}

console.log(isPangram('The quick brown fox jumps over the Lazy dog'));
