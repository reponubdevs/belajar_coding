let obj = {
	prop: "value",
	"pake spasi": [
		[123, 123123, 2, 23, 2],
		["bisa", "test", "satu"],
	],
	bisa: 123,
	obj2: {
		asd: "asdasd",
		asdasdasd: 123123,
		asdasdasd132: 123123,
		asdasdasd123: 123123,
	},
	kendaraan: [
		[123, 123123, 2, 23, 2],
		["bisa", "test", "satu"],
	],
};
//  CARA NAMBAh
obj["tambah spasi"] = ["asd"];

let tampil = obj["pake spasi"][1][1];
// console.log(tampil);

for (const key in obj) {
	// console.log("ini prop", key); //obj["prop"]
	// console.log("ini isi", obj[key]); //obj["prop"]
}

let arr = "asdasdasdsaddss";
/**
 *
 * {
 *  "A" : 3,
 *  "B" : 1,
 *  "C" : 4
 * }
 *
 */

let newObj = {};
for (let i = 0; i < arr.length; i++) {
	const perArr = arr[i]; // "A"

	if (!newObj[perArr]) {
		//newObj["B"]
		newObj[perArr] = 1;
	} else {
		newObj[perArr] += 1; //newObj["A"]
	}
}

let temp = 0;
let char = "";

for (const key in newObj) {
	if (newObj[key] > temp) {
		temp = newObj[key];
		char = key;
	}
}

console.log(char, temp);
