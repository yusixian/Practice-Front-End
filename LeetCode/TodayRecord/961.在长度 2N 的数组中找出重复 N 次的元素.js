// @algorithm @lc id=1001 lang=javascript 
// @title n-repeated-element-in-size-2n-array
import * as a from 'algm'
// @test([1,2,3,3])=3
// @test([2,1,2,5,3,2])=2
// @test([5,1,5,2,5,3,5,4])=5
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let m = new Map()
    let n = nums.length
    for(let i = 0; i < n; ++i) {
        if(m.has(nums[i])) {
            return nums[i]
        } else m.set(nums[i], 1)
    }
    console.log(m)
    return -1
};