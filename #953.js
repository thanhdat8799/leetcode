/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    if(words.length == 1) return true;

    for(let i = 0; i < words.length-1; i++){
        if(!isOrdered(words[i], words[i+1], order)) return false;
    }
    return true;
};

function isOrdered(str1, str2, order){
    if(str1.length < str2.length){
        for(let i = 0; i < str2.length; i++){
            char1 = str1.charAt(i);
            char2 = str2.charAt(i);
            if(!str1.charAt(i)) return true;
            if( order.indexOf(char1) > order.indexOf(char2)){
                return false;
            }
            else if(order.indexOf(char1) < order.indexOf(char2))
                return true;
        }
        return true;
    }
    else{
        for(let i = 0; i < str1.length; i++){
            char1 = str1.charAt(i);
            char2 = str2.charAt(i);
            if(!str1.charAt(i)) return true;
            if( order.indexOf(char1) > order.indexOf(char2)){
                return false;
            }
            else if(order.indexOf(char1) < order.indexOf(char2))
                return true;

        }
        return true;
    }
}
