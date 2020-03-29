/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var obj = {};

    for(let word of words){
    let morseString = "";
    word.split("").forEach(letter => {
        morseString = morseString + (morse[alphabet.indexOf(letter)]);
    });

    obj[morseString] = obj[morseString] + 1 || 1;
    }

    let res = Object.values(obj);
    return res.length;
};
