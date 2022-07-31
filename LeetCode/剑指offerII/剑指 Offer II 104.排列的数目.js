// @algorithm @lc id=1000290 lang=javascript 
// @title D0F0SV
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {

    let dp = new Array(target + 1).fill(0)
    // dp[i] 表示组成和为i列的元素组合个数
    dp[0] = 1
    for (let i = 1; i <= target; i++) {
        for(let j = 0; j < nums.length; ++j) {
            if(nums[j] <= i)
                dp[i] += dp[i-nums[j]]
        }
    }
    return dp[target]
};