// @algorithm @lc id=462 lang=javascript 
// @title minimum-moves-to-equal-array-elements-ii
import * as a from 'algm'
// @test([1,2,3])=2
// @test([1,10,2,9])=16
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    let n = nums.length
    let mid
    nums.sort((a,b)=>a-b)
    if(n&1) mid = nums[((n-1)>>1)]
    else mid = (nums[(n>>1)-1]+nums[(n>>1)])>>1
    let res = 0
    for(let i = 0;i < n; i++) 
        res += Math.abs(nums[i]-mid)
    return res
};