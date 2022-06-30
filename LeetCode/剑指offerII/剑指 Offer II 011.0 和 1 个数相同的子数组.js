// @algorithm @lc id=1000247 lang=javascript 
// @title A1NYOS
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    // 将0 -> -1 则相同数量他们的和就为0
    let sum = new Array(nums.length+1).fill(0)
    for(let i = 0; i < nums.length; ++i) {
        sum[i+1] = sum[i]+(nums[i] == 0?-1: 1)
    }
    // sum[j+1]-sum[i]
    if(sum[nums.length]-sum[0] == 0) return nums.length
    for(let k = nums.length-1; k >= 0; --k) {
        for(let i = 0; i+k-1 < nums.length; ++i) {
            if(sum[i+k]-sum[i] == 0) return k
        }
    }
    return 0
};