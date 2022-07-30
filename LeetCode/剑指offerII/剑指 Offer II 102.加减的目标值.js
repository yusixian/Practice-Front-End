// @algorithm @lc id=1000288 lang=javascript 
// @title YaVDxD
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let res = 0
    const dfs = (idx, sum) => {
        if(idx === nums.length) {
            if(sum === target) res++
            return
        }
        dfs(idx + 1, sum + nums[idx])
        dfs(idx + 1, sum - nums[idx])
    }
    dfs(0, 0)
    return res
};