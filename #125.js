/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    return helper(getAlphanumberic(s));
};

function getAlphanumberic(s){
    let clean = s.replace(/[^A-Z0-9]+/gi, "").toLowerCase();
    return clean;
}

function helper(s){ //isPalindrome with cleaned string argument
    let i = 0;
    let j = s.length - 1;

    while(i < j){
        if(s[i] != s[j]) return false;
        i++;
        j--;
    }
    return true;
}
