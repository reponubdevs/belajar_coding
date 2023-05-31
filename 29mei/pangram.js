function isPangram(string) {
  let dir = "abcdefghijklmnopqrstuvwxyz .";
  let newString = string.toLowerCase();
  let result = true;
  for (let i = 0; i < dir.length; i++) {
    let contain1 = dir[i];
    let flag1 = false;
    for (let j = 0; j < newString.length; j++) {
      let contain2 = newString[j];
      if (contain1 === contain2) {
        flag1 = true;
      }
    }
    if (flag1 == false) {
      result = false
    }
  }
  return result;
}
console.log(isPangram("This is not a pangram."));