// @algorithm @lc id=100321 lang=javascript 
// @title shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = new Array(32).fill(0)
    for (let i = 0; i < nums.length; ++i) {
        let num = nums[i]
        for (let j = 0; j < 32 && num; ++j) {
            if ((num & 1) === 1)
                res[j] += 1
            num = num >> 1
        }
    }
    let ans = 0
    for (let i = 0; i < 32; ++i) {
        if (res[i] % 3 !== 0)
            ans += (1 << i)
    }
    return ans
};