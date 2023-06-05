let soal = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
let penumpang = ["j", "k", "l", "m", "n"]

function bus(utama, baris, tambahan) {
    let arr = [];
    let temp = [];


    for (let i = 0; i < utama.length; i++) {
        temp.push(utama[i])
        if (temp.length == baris) {
            arr.push(temp)
            temp = []
        }
    }
    for (let j = 0; j < tambahan; j++) {
        const element = penumpang[j];
        temp.push(element);
        if (temp.length == baris) {
            arr.push(temp)
            temp = []
        }
    }
    if (temp.length !== 0){
        let sisa = baris - temp.length;
        for (let k = 0; k < sisa; k++) {
            temp.push("X");
        }
        arr.push(temp);
    }

    return arr;
}

let result = bus(soal, 6, 0)
console.log(result);
/**
 * output = [
 *  [ "a", "b", "c"],
 * [ "d", "e", "f"],
 * [ "g", "h", "i"],
 * ["j", "X", "X"]
 * ]
 */