let word = 3333355;
let dir = "";
if (typeof word == "number") {
	word = word.toString()
}

if (word.length > 1) {
	for (let i = 0; i < word.length; i++) {
		let data1 = word[i];
		let flag = false;
		if (dir.length !== 0) {
			for (let j = 0; j < dir.length; j++) {
				let data2 = dir[j];
				if (data1 == data2) {
					flag = true;
				}
			}
			if (flag == false) {
				dir += data1
			}
		} else {
			dir = data1
		}
	}
} else {
	console.log(`Hanya memiliki satu karakter yaitu ${word}`);
}

let result = 0;
let character = "";


for (let k = 0; k < dir.length; k++) {
	let data3 = dir[k];
	let tempResult = 0;
	for (let l = 0; l < word.length; l++) {
		let data4 = word[l];
		if (data3 == data4) {
			tempResult += 1;
		}
	}
	if (tempResult > result) {
		result = tempResult;
		character = data3
	}
}
console.log(result, character);














