function graduates(students){

}

let inputArr = [
    { "name": "Rin", "score": 100, "class": "foxes" },
    { "name": "Saber", "score": 80, "class": "wolves" },
    { "name": "Gilgamesh", "score": 30, "class": "foxes" },
    { "name": "Ishtar", "score": 50, "class": "wolves" }
]
console.log(graduates(inputArr));

// output =
// { foxes: [ { name: 'Rin', score: 100 } ], wolves: [ { name: 'Saber', score: 80 } ] }