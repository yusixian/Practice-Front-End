// @algorithm @lc id=944 lang=javascript 
// @title smallest-range-i
// @test([1],0)=0
// @test([0,10],2)=6
// @test([1,3,6],3)=0
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let [maxi, mini] = [nums[0], nums[0]];
    for (let i = 1; i < nums.length; i++) {
        maxi = Math.max(maxi, nums[i]);
        mini = Math.min(mini, nums[i]);
    }
    return Math.max(maxi - mini - 2 * k, 0)
};