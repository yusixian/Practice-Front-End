// @algorithm @lc id=532 lang=javascript 
// @title k-diff-pairs-in-an-array
// @test([3,1,4,1,5],2)=2
// @test([1,2,3,4,5],1)=4
// @test([1,3,1,5,4],0)=1
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let vis = new Set()
    let res = new Set()
    for(let i = 0; i < nums.length; i++){
        if(vis.has(nums[i]-k))
            res.add(nums[i]-k)
        if(vis.has(nums[i]+k))
            res.add(nums[i])
        vis.add(nums[i])
    }
    return res.size
};