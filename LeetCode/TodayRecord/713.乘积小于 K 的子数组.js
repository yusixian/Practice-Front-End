// @algorithm @lc id=713 lang=javascript 
// @title subarray-product-less-than-k
import * as a from 'algm'
// @test([10,5,2,6],100)=8
// @test([1,2,3],0)=0
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let [l, r] = [0, 0]
    let [res, mul] = [0, 1]
    while(r < nums.length) {
        mul *= nums[r]
        while(mul >= k && l <= r) 
            mul /= nums[l++]
        res += r - l + 1
        ++r
    }
    return res
};