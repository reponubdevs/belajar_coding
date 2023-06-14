// Contoh 1:
// let password
// let angka = "0987654321"
// let huruf = "abcdefghijklmnopqrstuvwxyz"
// let special = "~!@#$%^&*"
// output: "password high"

// Contoh 2:
// let password = "ABSSFDF0";

// output: "password medium"

// Contoh 3:
// let password = "asdVSSD";

// output: "password low"

let password = "asdV0SSD";
let angka = "0987654321";
let huruf = "abcdefghijklmnopqrstuvwxyz";
let special = "~!@#$%^&*";

for (let i = 0; i < password.length; i++){
    let isiPass = password[i];
    let flag = false;
    for (let j of angka){
        if (isiPass == j){
            flag = true;
        }
    }
}
console.log(flag);
