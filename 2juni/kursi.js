let soal = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
let penumpang = ["j", "k", "l", "m", "n"]

function bus(utama, baris, tambahan) {
    
    let result = [];
    let temp = [];

    for (let i = 0; i < utama.length; i++) {
        temp.push(utama[i])
        if (temp.length == baris) {
            result.push(temp)
            temp = [];
        }
    }
    for (let j = 0; j < tambahan; j++) {
        temp.push(penumpang[j])
        if (temp.length == baris) {
            result.push(temp)
            temp = [];
        }
    }
    if (temp.length !== 0){
        let sisa = baris - temp.length;
        for (let k = 0; k < sisa; k++) {
            temp.push(' ');
        }
        result.push(temp);
    }
    return result;
}

let result = bus(soal, 3, 2)
console.log(result);
/**
 * output = [
 *  [ "a", "b", "c"],
 * [ "d", "e", "f"],
 * [ "g", "h", "i"],
 * ["j", "X", " "]
 * ]
 */