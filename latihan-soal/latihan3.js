/* Eko bersama teman-temannya berencana hiking. Lalu dia menggunakan layanan aplikasi GO-HIKING! untuk mendapatkan rekomendasi destinasi yang tersedia.
Namun aplikasi GO-HIKING! baru memiliki 2 destinasi yaitu Pulau Jawa dan Papua.

Jika Eko dan teman-temannya ingin hiking di Pulau Jawa dan memiliki uang dibawah 20000, maka aplikasi GO-HIKING! akan merekomendasikan ke:
- Gunung Ciremai
- Gunung Prau

Jika Eko dan teman-temannya ingin hiking di Pulau Jawa dan memiliki uang 20000 ke atas, maka aplikasi GO-HIKING! akan merekomendasikan ke:
- Gunung Ciremai
- Gunung Prau
- Gunung Merbabu
- Gunung Semeru

Jika Eko dan teman-temannya ingin hiking di Pulau Papua dan memiliki uang dibawah 20000, maka aplikasi GO-HIKING! akan merekomendasikan ke:
- Gunung Jayawijaya
- Gunung Mandala

Jika Eko dan teman-temannya ingin hiking di Pulau Papua dan memiliki uang 20000 ke atas, maka aplikasi GO-HIKING! akan merekomendasikan ke:
- Gunung Jayawijaya
- Gunung Mandala
- Gunung Yamin
- Gunung Sumantri

Buatlah aplikasi sesuai dengan kondisi di atas. */

// 1. 
// INPUT:
// let money = 1000;
// let destination = "";

// OUTPUT:
// output = "Error! input tidak valid!";

// 2. 
// INPUT:
// let money = 15000;
// let destination = "Kalimantan";

// OUTPUT:
// output = "Pulau <destination> belum terjangkau Go-Hiking!";

// 3. 
// INPUT:
// let money = 5000;
// let destination = "Jawa";

// OUTPUT:
// output = "Dengan uang <money>, kamu bisa menuju ke gunung Ciremai dan Prau di pulau <destination>";

// 4. 
// INPUT:
// let money = 25000;
// let destination = "Papua";

// OUTPUT:
// output = "Dengan uang <money>, kamu bisa menuju ke gunung Jayawijaya, Mandala, Yamin dan Sumantri di pulau <destination>";


let money = 100000;
let destination = "Jawa";

if (destination == ""){
    console.log("Error! input tidak valid!");
} else if (destination == "Jawa") {
    if (money > 20000) {
        console.log(`Dengan uang ${money}, kamu bisa menuju ke gunung Ciremai, Prau, Merbabu dan Semeru di pulau ${destination}`);
    } else {
        console.log(`Dengan uang ${money}, kamu bisa menuju ke gunung Ciremai dan Prau di pulau ${destination}`);
    }
} else if (destination == "Papua") {
    if (money > 20000) {
        console.log(`Dengan uang ${money}, kamu bisa menuju ke gunung Jayawijaya, Mandala, Yamin dan Sumantri di pulau ${destination}`);
    } else {
        console.log(`Dengan uang ${money}, kamu bisa menuju ke gunung Jayawijaya dan Mandala di pulau ${destination}`);
    }
} else {
    console.log(`Pulau ${destination} belum terjangkau Go-Hiking!`);
}