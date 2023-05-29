let obj = {
	0: 234,
	37: 1231,
	benda: "kursi",
	"rokok lokal": "aroma",
	arr: ["buku", "motor", "mobil"],
};

// console.log(obj["benda"]); // cara 1
// console.log(obj.benda); // cara 2

//  CARA REASSIGN
obj.benda = "meja";

// CARA NAMBAH PROPERTI
obj["laptop"] = "asus"; // cara 1
// obj.laptop = "dell" // cara 2
// console.log(obj.arr[0]);

for (let i = 0; i < obj.arr.length; i++) {
	const isi = obj.arr[i];
	// console.log(isi);
}

// CARA DELETE
delete obj["laptop"];
// delete obj["arr"]
obj.arr.pop();

obj.benda = { 1: "meja", 2: "kuri" };

// console.log(obj);

let data = [
	{
		username: "tomibintono",
		email: "sugiartomi@gmail.com",
		password: "coba",
		gender: "male",
		wallet: {
			BTC: 0.00005,
			ETH: 0.5,
			IDR: 100000,
		},
		IDCard: ["12389719823", "07340573"], //KTP, SIM
	},
	{
		username: "thessarts",
		email: "thessarts@gmail.com",
		password: "coba",
		gender: "male",
		wallet: {
			BTC: 0.00005,
			ETH: 0.5,
			IDR: 100000,
		},
		IDCard: ["12389719823", "07340573"], //KTP, SIM
	},
];

// function login(username, password) {

// 	let find = data.find((e) => {
// 		return e.username === username;
// 	});

// 	if (!find) {
// 		return `${username} tidak terdaftar`;
// 	} else {
// 		if (username === find.username) {
// 			if (password === find.password) {
// 				return `login success`;
// 			} else {
// 				return `password yang anda masukan salah`;
// 			}
// 		}
// 	}
// }

// console.log(login("tomibintono", "coba"));

// console.log(data[1]);

// for (const key in obj) {

//     console.log(key);
// }

let i = 0
while (i < 10) {
    console.log(i);
    i++
}