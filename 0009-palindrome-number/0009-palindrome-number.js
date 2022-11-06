/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = String(x);
    if(str.split('').join('') === str.split('').reverse().join('')){
        return true;
    }
    return false;
};