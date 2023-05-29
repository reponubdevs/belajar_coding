let word = 1223112311;
let character = "";
word = word.toString();

if (word.length > 1) {
    for (let i = 0; i < word.length; i++) {
        let isi1 = word[i];
        for (let j = 1; j < word.length; j++) {
            let isi2 = word[j];
            if ( isi1 == isi2){
                character = character + isi2;
            }
            }
            character += "\n"
        }
    }
 else {
    console.log(`Hanya memiliki satu karakter yaitu ${word}`)
}
console.log(character);