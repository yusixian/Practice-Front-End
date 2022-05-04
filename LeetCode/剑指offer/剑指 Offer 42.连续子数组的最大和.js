// @algorithm @lc id=100304 lang=javascript 
// @title lian-xu-zi-shu-zu-de-zui-da-he-lcof
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = -1000
    let nowsum = 0
    for(let i = 0; i < nums.length; i++){
        nowsum += nums[i]
        ans = Math.max(ans, nowsum)
        if(nowsum < 0) nowsum = 0
    }
    return ans
};