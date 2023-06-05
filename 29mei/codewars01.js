// function squareDigits(num){
//     let data1 = num.toString();
//     let result = ""; 
//     for (let i = 0; i < data1.length; i++){
//          result += data1[i]**2;
//     }
//     return parseInt(result);
//   }

function isValidWalk(walk) {
    let obj = {};
    let arr = [];

    if (walk.length === 10) {
        for (let i = 0; i < walk.length; i++) {
            let data = walk[i];
            if (!obj[data]) {
                obj[data] = 1;
            } else {
                obj[data] += 1;
            }
        }

        if ((obj.n && obj.s) || (obj.w && obj.e)) {
            if (obj.n && obj.s) {
                if (obj.n === obj.s) {
                    return true
                } else {
                    return false
                }
            }
            if (obj.w && obj.e) {
                if (obj.w === obj.e) {
                    return true
                } else {
                    return false
                }
            }
        } else {
            return false
        }
        // for ( let key in obj ){
        //     arr.push(obj[key])
        // }
        // if (arr[0] == arr[1]){
        //     return true;
        // } else {
        //     return false;
        // }
    } else {
        return false;
    }
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
