let word = 1223112311;
let character = "";
word = word.toString();

if (word.length > 1) {
	for (let i = 0; i < word.length; i++) {
		let isi1 = word[i];
		for (let j = 1; j < word.length; j++) {
			let isi2 = word[j];
			if (isi1 == isi2) {
				character = character + isi2;
			}
		}
		character += "\n";
	}
} else {
	console.log(`Hanya memiliki satu karakter yaitu ${word}`);
}
console.log(character);

let soal = "aaaidfgjonasda";

let dir = ""; //tomi sugar

for (let i = 0; i < soal.length; i++) {
	let perHuruf = soal[i];

	if (dir.length !== 0) {

        let flag = false

		for (let j = 0; j < dir.length; j++) {
			let perHurufDir = dir[j];
            if(perHuruf == perHurufDir) {
                flag = true
            } 
		}

        if(flag === false){
            dir += perHuruf
        }
	} else {
		dir += perHuruf;
	}
}

let result = 0
let char = ""

for (let k = 0; k < dir.length; k++) {
	let perHuruf = dir[k]; // tomi sugar

	let tempResult = 0;

	for (let l = 0; l < soal.length; l++) {
		let perHurufDir = soal[l]; //tomi sugiarto    0 = t

		if (perHuruf === perHurufDir) {
			tempResult += 1;
		}
	}

    if( result === 0) {
        result = tempResult
        char = perHuruf
    } else {
        if( tempResult > result) {
            result = tempResult
            char = perHuruf;
        }
    }
}

// console.log(result, char);






