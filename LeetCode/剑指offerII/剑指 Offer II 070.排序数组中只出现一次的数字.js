// @algorithm @lc id=1000334 lang=javascript 
// @title skFtm2
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let sum = 0
    for(let i = 0; i < nums.length; ++i)
        sum ^= nums[i]
    return sum
};