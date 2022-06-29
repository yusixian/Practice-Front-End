// @algorithm @lc id=1000239 lang=javascript 
// @title 1fGaJU
// import * as a from 'algm'
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    nums.sort((a, b) => a-b)
    function binary(tar, l, r) {
        while(l <= r) {
            let mid = (l+r) >> 1
            if(nums[mid] == tar) return mid
            else if(nums[mid] > tar) r = mid-1
            else l = mid+1
        }
        return -1
    }
    for(let i = 0; i < nums.length; ++i) {
        if(i != 0 && nums[i] == nums[i-1]) continue
        for(let j = i+1; j < nums.length; ++j) {
            if(j != i+1 && nums[j] == nums[j-1]) continue
            let idx = binary(-(nums[i]+nums[j]), j+1, nums.length-1)
            if(idx == -1) continue
            res.push([nums[i], nums[j], nums[idx]])
        }
    }
    return res
};