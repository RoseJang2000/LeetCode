/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let arr = num.toString().split('');
    arr.sort((a, b) => a - b);
    return Number(arr[0] + arr[3]) + Number(arr[1] + arr[2]);
};