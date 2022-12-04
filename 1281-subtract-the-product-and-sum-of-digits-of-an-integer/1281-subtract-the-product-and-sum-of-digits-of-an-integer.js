/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = n.toString().split('');
    
    let product = arr.reduce((a, b) => Number(a) * Number(b));
    let sum = arr.reduce((a, b) => Number(a) + Number(b));
    
    return product - sum;
};