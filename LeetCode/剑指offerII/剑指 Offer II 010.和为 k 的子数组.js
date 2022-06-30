// @algorithm @lc id=1000246 lang=javascript 
// @title QTMn0o
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res = 0
    for(let i = 0; i < nums.length; ++i) {
        let sum = 0
        for(let j = i; j < nums.length; ++j) {
            sum += nums[j]
            if(sum == k) res++
        }
    }
    return res
};