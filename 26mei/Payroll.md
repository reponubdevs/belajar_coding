OBJECTIVE

- Mampu memecahkan masalah yang diberikan
- Mampu mengakses array multidimensi
- Mampu menggabungkan looping dan conditional
- Mampu menerapkan nested loop

DIRECTION

Startup Doel ingin membuat sistem untuk menghitung total gaji karyawan nya berdasarkan total kehadiran dalam satu bulan.
Bantulah Startup Doel untuk merealisasikan sistem menghitung total gaji karyawan dengan ketentuan sebagai berikut!

Diberikan sebuah function bernama payroll yang memiliki satu parameter monthlyAbsen berupa array multidimensi, dan memiliki output berupa string.
Contoh parameter input monthlyAbsen:
```js
const januaryAbsen = [
    ["H", "H", "H", "H", "H", "H"],
    [["A", "B"], ["L", 4], "H", ["L", 3], "H", "H"],
    ["H", "H", "H", "T", ["A", "C"], ["A", "C"]],
    ["H", "T", ["A", "S"], "H", "H", "H"],
]
```
-- Terdapat 4 status kehadiran, yaitu:

- "H" = Hadir
- "T" = Terlambat ["L", 4] = Lembur

beserta total jam lembur nya. ["A", ...] = Tidak Hadir mempunyai 3 kategori,
yaitu:
- "B" = Bolos
- "S" = Sakit
- "C" = Cuti


NOTES
- Gaji Pokok Karyawan: Rp 5.000.000
- Tiap status kehadiran sangat mempengaruhi sistem penggajian, yaitu:
    1. Jika dalam satu bulan penuh karyawan selalu hadir atau jumlah kehadiran (H) adalah 24 hari, maka mendapatkan bonus gaji sebesar Rp 500.000.
    2. Jika karyawan terlambat [T] maka akan mendapat pengurangan gaji sebesar Rp 50.000 per hari.
    3. Jika karyawan melakukan lembur [L], maka akan mendapatkan tambahan gaji sebesar Rp 50.000 per jam.
    4. Jika karyawan tidak hadir [A] dengan keterangan:
        - Bolos [B], maka akan mendapat pengurangan gaji sebesar Rp 200.000
        - Sakit [S] dan Cuti [C] tidak akan mendapat pengurangan gaji.
-Jika parameter monthlyAbsen kosong/undefined/null, maka akan mengembalikan Invalid Data!.
- Jika panjang array dari parameter monthlyAbsen kurang dari 4, maka akan mengembalikan Data absen tidak lengkap!.

contoh :
```js
let januari = [ 
    [ "H","H","H","T","H","H" ],
    [ "H","H",["A","C"],"H","H","H" ],
    [ "H","H","H","H","H","H" ],
    [ "H","H","H","H",["A","S"],"H" ]
]

/*
Absensi Bulan ini :
Hadir: 22
Sakit: 1
Terlambat: 1
Alpa: 0
Cuti: 1
Lembur: 0 jam
Gaji yang anda terima bulan ini adalah Rp. 4950000.
*/
```