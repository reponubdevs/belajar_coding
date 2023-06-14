/* Penentuan citizen didapatkan dari id customer yang bertipe string dengan ketentuan:

Penempatan kode citizen dalam string id customer ditempatkan secara acak, Apabila dalam string id customer terdapat huruf I, maka citizen adalah WNI, Apabila dalam string id customer terdapat huruf A, maka citizen adalah WNA, contoh 1:
id = "3888-I-0197621", karena dalam string id terdapat huruf I, maka citizen = WNI contoh 2:
id = "38880197-A-621", karena dalam string id terdapat huruf A, maka citizen = WNA Apabila dalam string id customer tidak terdapat huruf I atau A, maka citizen adalah string kosong (""), dan akan menampilkan pesan Anda tidak terdaftar


Setelah eko menentukan destinasi hikingnya, eko meminta vincent untuk melakukan pembayaran. Ketentuan pembayaran:

Jika citizen adalah WNI:

Harga Utama: 20000/orang Diskon 20% dari Harga Total, Jika total anggota di atas 20 orang

Jika citizen adalah WNA:
Harga Utama: 50000/orang Diskon 20% dari Harga Total, Jika total anggota di atas 30 orang
Penghitungan total tagihan:

Harga Total - (Harga Total * Diskon) */

// // format output:
// "Karena anda adalah <citizen>, maka tagihan untuk id <id> adalah <totalHarga>"

// // Contoh 1:
// input:


// output:
// `Karena anda adalah wni, maka tagihan untuk id 3888-I-0197621 adalah 336000`

// // Contoh 2:
// input:
// let id = "38880197-A-621";
// let totalMember = 10;

// output:
// `Karena anda adalah wna, maka tagihan untuk id 38880197-A-621 adalah 500000`

// // Contoh 3:
// input:
// let id = "38880197621";
// let totalMember = 10;

// output:
// `Anda tidak terdaftar`

let id = "38880197-A-621";
let totalMember = 20;
let citizen = "";
let tagihan = 0;

for (let i = 0; i < id.length; i++) {
    
    const isiId = id[i];
    
    if (isiId == "A") {
        citizen = "WNA";
    } else if (isiId == "I") {
        citizen = "WNI";
    }
}
if (citizen == "WNA") {
    let hargaA = 50000 * totalMember
    if (totalMember > 30){
        tagihan = hargaA - (hargaA*20/100);
    } else {
        tagihan = hargaA;
    }
} else if (citizen == "WNI") {
    let hargaI = 20000 * totalMember
    if (totalMember > 20){
        tagihan = hargaI - (hargaI*20/100);
    } else {
        tagihan = hargaI;
    }
}

if (citizen == ""){
    console.log("Anda tidak terdaftar");
} else {
    console.log(`Karena anda adalah ${citizen}, maka tagihan untuk id ${id} adalah ${tagihan}`);
}
