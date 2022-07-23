// @algorithm @lc id=1000343 lang=javascript 
// @title TVdhkn
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    let maxi = (1 << nums.length)
    for(let i = 0; i < maxi; ++i) {
        let arr = []
        for(let j = 0; j < nums.length; ++j) {
            if(i & (1 << j)) arr.push(nums[j])
        }
        res.push(arr)
    }
    return res
};