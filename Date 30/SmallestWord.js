const smallestWord = (sentence) => {
    const newSentence = sentence.split(" ");
    let smallword = newSentence[0];
    for (let i = 0; i < newSentence.length; i++) {
        if (newSentence[i].length < smallword.length) {
            smallword = newSentence[i]
        }
    }
    return smallword

}

console.log(smallestWord("Hello this is abhishek singh"));
