/*
 * @Author: cos
 * @Date: 2022-07-15 23:15:26
 * @LastEditTime: 2022-07-15 23:37:39
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 057.值和下标之差都在给定的范围内.js
 */
// @algorithm @lc id=1000321 lang=javascript 
// @title 7WqeDu
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const buck = new Map()
    const size = t+1
    function getId(num) {
        return num >= 0?
         Math.floor(num/size):
         Math.floor((num + 1) / size) - 1
    }
    for(let i = 0; i < nums.length; ++i) {
        let num = nums[i]
        let id = getId(num)
        if(buck.has(id) ||
        (buck.has(id - 1) && buck.get(id - 1) + t >= num) ||
        (buck.has(id + 1) && buck.get(id + 1) - t <= num))
            return true 
        buck.set(id, num)
        if(i >= k)
            buck.delete(getId(nums[i - k], size))
    }
    return false
};