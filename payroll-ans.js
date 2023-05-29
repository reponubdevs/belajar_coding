const januaryAbsen = [
    ["H", "H", "H", "H", "H", "H"],
    [["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
    ["H", "H", "H", "T", ["A", "C"], ["A", "C"]],
    ["H", "T", ["A", "S"], "H", "H", "H"],
]

let hadir = 0; //16
let sakit = 0; //1
let terlambat = 0; //2
let alpa = 0; //1
let cuti = 0; //2
let lembur = 0; // 7
let gapok = 5000000;


for (let i = 0; i < januaryAbsen.length; i++) {
    let hasil = januaryAbsen[i];
    for (let j = 0; j < hasil.length; j++) {
        let hasil2 = januaryAbsen[i][j];
        if (hasil2 == "H") {
            hadir += 1;
        } else if (hasil2 == "T") {
            terlambat += 1;
        } else if (hasil2[0] == "L") {
            lembur += hasil2[1];
        } else if (hasil2[0] == "A" && hasil2[1] == "B") {
            alpa += 1;
        } else if (hasil2[0] == "A" && hasil2[1] == "S") {
            sakit += 1;
        } else if (hasil2[0] == "A" && hasil2[1] == "C") {
            cuti += 1;
        }
    }
}

if (hadir == 24) {
    gapok += 500000;
} else {
    gapok = gapok - terlambat * 50000 - alpa * 200000 + lembur * 50000;
}

console.log(`Absensi Bulan Ini:
Hadir: ${hadir}
Sakit: ${sakit}
Terlambat: ${terlambat}
Alpa: ${alpa}
Cuti: ${cuti}
Lembur: ${lembur} jam
Gaji yang anda terima bulan ini adalah Rp.${gapok.toLocaleString('id-ID')}`);