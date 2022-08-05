// @algorithm @lc id=1000320 lang=javascript 
// @title WhsWhI
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
	if(nums.length == 0) return 0
	nums.sort((a, b) => a-b)
	let res = 1
	let len = 1
	for(let i = 1; i < nums.length; ++i) {
		if(nums[i] == nums[i-1]) continue
		if(nums[i] == nums[i-1]+1) {
			len++
			res = Math.max(len, res)
		} else len = 1
	}
	return res
};