// @algorithm @lc id=1000244 lang=javascript 
// @title ZVAVXX
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let l = 0
    let [res, mul] = [0, 1]
    for(let r = 0; r < nums.length; ++r) {
        mul *= nums[r]
        while(l <= r && mul >= k) {
            mul /= nums[l++]
        }
        res += r-l+1
    }
    return res
};