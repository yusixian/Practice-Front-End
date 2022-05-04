// @algorithm @lc id=100331 lang=javascript 
// @title que-shi-de-shu-zi-lcof
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    for(let i = 0; i < n; ++i)
        if(nums[i] != i) return i
    return n
};