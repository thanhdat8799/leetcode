/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {} // {1: 3, 2: 2, 3:1};

    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = obj[arr[i]] + 1 || 1;
    }

    let values = Object.values(obj);

    for(let i = 0; i < values.length -1; i++){
        for(let j = i+1; j < values.length; j++){
            if (values[i] == values[j]) return false;
        }
    }

    return true;
};
