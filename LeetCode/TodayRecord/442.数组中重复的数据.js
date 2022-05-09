// @algorithm @lc id=442 lang=javascript 
// @title find-all-duplicates-in-an-array
import * as a from 'algm'
// @test([5,4,6,7,9,3,10,9,5,6])=[9,5,6]
// @test([4,3,2,7,8,2,3,1])=[2,3]
// @test([1,1,2])=[1]
// @test([1])=[]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let toidx = nums[i]-1
        while(nums[toidx] != nums[i]) {
            let t = nums[toidx]
            nums[toidx] = nums[i]
            nums[i] = t
            toidx = nums[i]-1
        }
    }
    return nums.filter((v, i) => v-1 != i)
};