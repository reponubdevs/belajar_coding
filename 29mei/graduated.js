function graduates(students) {

    let indexFox = 0;
    let indexWolf = 0;
    let scoreFox = 0;
    let scoreWolf = 0;

    for (let i = 0; i < students.length; i++) {
        let isiArr = students[i]; // looping isi array { "name": "Rin", "score": 100, "class": "foxes" }
        if (isiArr.class == "foxes") {
            if (isiArr.score > scoreFox) {
                indexFox = i;
                scoreFox = isiArr.score;
            }
        } else if (isiArr.class == "wolves") {
            if (isiArr.score > scoreWolf) {
                indexWolf = i;
                scoreWolf = isiArr.score;
            }
        }
    }
    let foxes = [{
        nama: students[indexFox].name,
        score: students[indexFox].score,
    }];
    let wolves = [{
        nama: students[indexWolf].name,
        score: students[indexWolf].score,
    }];
    return {
        foxes,
        wolves

    }
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