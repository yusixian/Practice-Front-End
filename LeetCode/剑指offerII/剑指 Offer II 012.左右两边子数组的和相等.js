// @algorithm @lc id=1000248 lang=javascript 
// @title tvdfij
import * as a from 'algm'
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = new Array(nums.length+1).fill(0)
    for(let i = 0; i < nums.length; ++i) {
        sum[i+1] = sum[i]+nums[i]
    }
    for(let i = 0; i < nums.length; ++i) {
        let lsum = i == 0 ? 0: sum[i]
        let rsum = i == nums.length-1 ? 0: sum[nums.length]-sum[i+1]
        if(lsum == rsum) return i
    }
    return -1
};