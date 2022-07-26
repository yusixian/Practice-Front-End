// @algorithm @lc id=1000266 lang=javascript 
// @title PzWKhm
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const robFor = (s, e) => {
        let [prev, curr] = [nums[s], Math.max(nums[s], nums[s + 1])]
        for(let i = s+2; i <= e; ++i) {
            let t = curr
            curr = Math.max(prev + nums[i], curr)
            prev = t
        }
        return curr
    }
    if(nums.length <= 3) return Math.max(...nums)
    return Math.max(robFor(0, nums.length-2), robFor(1, nums.length-1))
};