// @algorithm @lc id=1000233 lang=javascript 
// @title WGki4K
import * as a from 'algm'
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let bits = new Array(32).fill(0)
    for(let i = 0; i < nums.length; ++i) {
        let num = nums[i]
        for(let j = 0; j < 32; ++j) {
            if(num & (1<<j))
                bits[j]++
        }
    }
    let res = 0
    for(let i = 0; i < 32; ++i) {
        if(bits[i] % 3) 
            res += (1<<i)
    }
    return res
};