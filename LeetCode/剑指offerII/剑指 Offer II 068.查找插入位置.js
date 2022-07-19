// @algorithm @lc id=1000332 lang=javascript 
// @title N6YdxV
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let [l, r] = [0, nums.length-1]
    while(l < r) {
        let mid = (l + r) >> 1
        if(nums[mid] == target) return mid
        else if(nums[mid] < target) {
            l = mid+1
        } else r = mid
    }
    return l == nums.length-1 && nums[l] < target? l+1: l
};