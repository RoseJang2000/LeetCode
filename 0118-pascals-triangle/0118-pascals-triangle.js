/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    
    for (let i = 0; i < numRows; i++) {
        let arr = new Array(i + 1).fill(1);
        
        for (let j = 1; j < arr.length - 1; j++) {
            arr[j] = result[i-1][j-1] + result[i-1][j];
        }
        result.push(arr);;
    }
    return result;
};