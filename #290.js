/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    splitedPattern = pattern.split("");
    splittedString = str.split(" ");

    patternObj = {}; // {a: 1, b; 2}
    stringObj = {}; // {leet:1, code: 2}
    
    for(character of splitedPattern){
        patternObj[character] = patternObj[character] + 1 || 1;
    }

    for(word of splittedString){
        stringObj[word] = stringObj[word] +1 || 1;
    }

    val1 = Object.values(patternObj);
    val2 = Object.values(stringObj);

    //convert to JSON string to compare two array
    return JSON.stringify(val1) == JSON.stringify(val2);
};
