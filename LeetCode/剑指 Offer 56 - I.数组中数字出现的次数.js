// @algorithm @lc id=100320 lang=javascript 
// @title shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let xor = 0  // 为这两数字的异或
    for (let i = 0; i < nums.length; i++) 
    xor ^= nums[i]
    let mask = 1
    while((xor & mask) === 0) 
      mask = mask << 1

    let [a, b] = [0, 0]
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & mask) === 0)
            a ^= nums[i]
        else b ^= nums[i]
    }
    return [a, b];
};