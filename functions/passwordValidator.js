// function passwordValidator(password, username) {
//   if (
//     password.length >= 8 &&
//     !password.indexOf('') &&
//     !password.includes(username)
//   ) {
//     return true;
//   }

//   return false;
// }

function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(' ') !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

console.log(isValidPassword('89Fj j1nms', 'do'));
