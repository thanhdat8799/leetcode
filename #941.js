/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if( A.length <3 ) return false;
    let flag = 0;
    var i = 0;
    for(i; i < A.length-1; i++){
        if(A[i] == A[i+1]) return false;
        if(A[i] > A[i+1]) {
            flag = 1;
            break;
                          }
    }
    if(flag == 0 || i == 0) return false;
    for(i; i < A.length-1; i++){
        if(A[i] <= A[i+1]) return false;
    }
    return true;
};
