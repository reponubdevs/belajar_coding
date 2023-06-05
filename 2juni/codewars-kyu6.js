function spinWords(string) {
  // let newString = string.split(" ")
  // let result = "";
  // let spinWords = newString.map(word => {
  //   if (word.length >= 5){
  //     return word.split("").reverse().join("")
  //     }
  //     return word
  //     })
  //     return spinWords.join(" ")
    for (let i = 0; i < newString.length; i++) {
      const contain = newString[i];
      if (contain.length >= 5) {
        for (let j = contain.length - 1; j >= 0; j--) {
          const element = contain[j];
          result += element;
        }
      } else {
        result += contain;
      }
      result += " ";
    }
    return result.trim();
}

console.log(spinWords("Welcome"))