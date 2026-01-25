function countLetters(str) {
    const letters = {};
    for (let index = 0; index < str.length; index = index + 1) {
        let char = str[index];
        if (letters[char]) {
            letters[char] = letters[char] + 1;
        } else {
            letters[char] = 1;
        }
    }
    return letters;
}
console.log(countLetters("aabbcccccdddaa")); 