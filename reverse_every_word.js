function revWords(sentence) {
    let words = [];
    let word = '';

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            word += sentence[i];
        } else {
            words.push(word);
            word = '';
        }
    }
    words.push(word); 

    let reversedWords = [];
    for (let w of words) {
        let reversedWord = '';
        for (let j = w.length - 1; j >= 0; j--) {
            reversedWord += w[j];
        }
        reversedWords.push(reversedWord);
    }


    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}


let inputSentence = "This is a sunny day";
let reversed = revWords(inputSentence);
console.log(reversed);
