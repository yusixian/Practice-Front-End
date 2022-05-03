// @algorithm @lc id=100329 lang=javascript 
// @title zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;
    let l = 0, r = n - 1;
    while(nums[l] != target && l <= r) ++l
    while(nums[r] != target && l <= r) --r;
    if(l <= r && nums[l] == target && nums[r] == target) return r-l+1
    else return 0
}