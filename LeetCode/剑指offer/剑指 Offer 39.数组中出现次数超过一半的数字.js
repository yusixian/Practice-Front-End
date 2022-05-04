// @algorithm @lc id=100310 lang=javascript 
// @title shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let vote = 0;
    let candidate = null;
    for (let num of nums) {
        if (vote === 0) 
            candidate = num;
        vote += (num === candidate) ? 1 : -1;
    }
    return candidate;
};
// var majorityElement = function(nums) {
//     let m = new Map()
//     for ( let i = 0; i < nums.length; i++) {
//         if (m.has(nums[i])) {
//             let t = m.get(nums[i])
//             if(t+1 > Math.floor(nums.length / 2))
//                 return nums[i]
//             m.set(nums[i],t + 1)
//         } else m.set(nums[i], 1)
//     }
//     return nums[nums.length-1]
// };