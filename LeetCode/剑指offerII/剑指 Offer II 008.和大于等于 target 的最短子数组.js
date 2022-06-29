// @algorithm @lc id=1000242 lang=javascript 
// @title 2VG8Kg
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let [l, r] = [0, 0]
    let [minlen, sum] = [nums.length+1, 0]
    while(r < nums.length) {
        sum += nums[r]
        while(sum >= target) {
            minlen = Math.min(minlen, r-l+1)
            sum -= nums[l]
            ++l
        }
        ++r
    }
    return minlen == nums.length+1 ? 0: minlen
};