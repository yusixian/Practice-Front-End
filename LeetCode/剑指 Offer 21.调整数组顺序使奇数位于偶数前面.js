// @algorithm @lc id=100291 lang=javascript 
// @title diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    if(nums.length <= 1) return nums
    let [l, r] = [0, nums.length-1]
    while(l < r) {
        if(nums[l] % 2 === 1) ++l
        else if(nums[r] % 2 === 0) --r
        else {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            ++l, --r
        }
    }
    return nums
};