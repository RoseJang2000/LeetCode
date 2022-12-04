/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr =[];
 
    for(let j = 0; j < nums.length;j++){
       let counter = 0
        for (let i = 0; i < nums.length; i++){
            if (nums[j] > nums[i]){
                counter++
            }
        }
        arr.push(counter)
    }
    return arr
};