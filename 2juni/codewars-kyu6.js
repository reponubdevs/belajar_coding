// {
// function spinWords(string) {
//   // let newString = string.split(" ")
//   // let result = "";
//   // let spinWords = newString.map(word => {
//   //   if (word.length >= 5){
//   //     return word.split("").reverse().join("")
//   //     }
//   //     return word
//   //     })
//   //     return spinWords.join(" ")
//     for (let i = 0; i < newString.length; i++) {
//       const contain = newString[i];
//       if (contain.length >= 5) {
//         for (let j = contain.length - 1; j >= 0; j--) {
//           const element = contain[j];
//           result += element;
//         }
//       } else {
//         result += contain;
//       }
//       result += " ";
//     }
//     return result.trim();
// }

// console.log(spinWords("Welcome"))
// }
// {
//   function findOdd(A) {
//     let counter = {}
//     for (let i = 0; i < A.length; i++) {
//       let contain = A[i];
//       if (!counter[contain]) {
//         counter[contain] = 1
//       } else {
//         counter[contain] += 1
//       }
//     }
//     for (const key in counter) {
//       if (counter[key] % 2 == 1) {
//         return Number(key);
//       }
//     }
//   }
//   console.log(findOdd([1, 2, -1, -1, 1, 2, 2]));
// }
// {
//   function rowSumOddNumbers(n) {
// 	// let baris = 1;
//   // let arr = [0]
//   // let temp = []
//   // for (let i = 1; i <= n^3 ; i++) {
//   //   if (i % 2 === 1){
//   //     temp.push(i)

//   //     if ( temp.length == baris ){
//   //       arr.push(temp)
//   //       temp = []
//   //       baris++
//   //     }
//   //   }
//   // }
//   // let result = arr[n].reduce((a,b) => a + b )
//   return Math.pow(n, 3)

// }
// console.log(rowSumOddNumbers(4));
// }
{
  function deleteNth(arr, n) {
    let obj = {}
    let del = 0;
    let newArr = arr
    

    for (let i = 0; i < arr.length; i++) {
      const arrContain = arr[i];
      if (!obj[arrContain]) {
        obj[arrContain] = 1;
      } else {
        obj[arrContain] += 1;
      }
    }
    for (let key in obj) {
      if (obj[key] > n) {
        del += Number(key)
      }
    }
    let del2 = arr.lastIndexOf(del)
    delete newArr[del2]
    return newArr;
  }
  console.log(deleteNth([1, 2, 1, 2, 1, 1, 1, 1, 2], 3))


}