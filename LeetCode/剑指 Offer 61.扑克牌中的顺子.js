// @algorithm @lc id=100341 lang=javascript 
// @title bu-ke-pai-zhong-de-shun-zi-lcof
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    nums.sort((a, b) => a - b)
    let idx = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) ++idx
        else if(nums[i] == nums[i-1]) return false
    }
    return nums[4] - nums[idx] < 5
};