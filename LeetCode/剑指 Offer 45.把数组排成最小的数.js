// @algorithm @lc id=100323 lang=javascript 
// @title ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    return nums.sort((a, b) => (''+a+b) - (''+b+a)).join('');
};