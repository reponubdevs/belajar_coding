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

let password = "";
let angka = "0987654321";
let huruf = "abcdefghijklmnopqrstuvwxyz";
let special = "~!@#$%^&*";

password = password.toLocaleLowerCase()
let counter = 0;
let flag1 = false;
let flag2 = false;
let flag3 = false;

for (let i = 0; i < password.length; i++) {
    let isiPass = password[i];
    for (let j of angka) {
        if (isiPass == j) {
            flag1 = true;
        }
    }
    for (let k of huruf) {
        if (isiPass == k) {
            flag2 = true;
        }
    }
    for (let l of special) {
        if (isiPass == l) {
            flag3 = true;
        }
    }
}

if (flag1 == true){
    counter++
}
if (flag2 == true){
    counter++
}
if (flag3 == true){
    counter++
}

switch (counter){
    case 3 : console.log(`password high`)
    break;
    case 2 : console.log(`password medium`)
    break;
    default : console.log(`password low`)
}

