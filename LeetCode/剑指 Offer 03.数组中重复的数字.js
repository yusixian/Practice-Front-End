// @algorithm @lc id=100275 lang=javascript 
// @title shu-zu-zhong-zhong-fu-de-shu-zi-lcof
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    let m = new Map();
    for(let i = 0; i < nums.length; i++){
        if(m.has(nums[i]))
            return nums[i];
        else m.set(nums[i], true);
    }
};
// var findRepeatNumber = function(nums) {
//     let n = nums.length
//     nums.sort((a, b) => a - b)
//     for(let i = 1; i < n; ++i)
//         if(nums[i] == nums[i-1]) return nums[i]
// };