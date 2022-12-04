/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map((num1, idx) => {
        return nums.filter(num2 => num2 < nums[idx]).length;
    })
};