function changeMe(arr) {
	// you can only write your code here!
	let obj1 = {};
	let obj2 = {};

	for (let i = 0; i < arr.length; i++) {
		let isi1 = arr[i];
		let newObj = {
			firstName: isi1[0],
			lastName: isi1[1],
			gender: isi1[2],
			age: isi1[3]
		}
		if (newObj.age === undefined){
			newObj.age = "Invalid Birth Year";
		} else {
			newObj.age = 2023 - newObj.age;
		}
		if (i === 0) {
			obj1 = newObj;
		} else {
			obj2 = newObj;
		}
	}
	let result = `1. ${obj1.firstName} ${obj1.lastName} : ${JSON.stringify(obj1)}
2. ${obj2.firstName} ${obj2.lastName} : ${JSON.stringify(obj2)}`;

	return result;

}

let inputArr = [
	["Christ", "Evans", "Male", 1982],
	["Robert", "Downey", "Male"],
];

console.log(changeMe(inputArr));
//output =
// 1. Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 40 }
// 2. Robert Downey:{firstName: 'Robert',lastName: 'Downey',gender: 'Male',age: 'Invalid Birth Year'}
