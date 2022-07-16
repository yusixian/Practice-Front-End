/*
 * @Author: cos
 * @Date: 2022-07-16 14:19:54
 * @LastEditTime: 2022-07-16 15:49:27
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \Practice-Front-End\LeetCode\剑指offerII\剑指 Offer II 061.和最小的 k 个数对.js
 */
// @algorithm @lc id=1000326 lang=javascript 
// @title qn8gGX
// 此题同样用优先队列最为合适
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const [m, n] = [nums1.length, nums2.length]
    let res = []
    for(let i = 0; i < m; ++i)
        for(let j = 0; j < n; ++j)
            res.push([nums1[i], nums2[j]])
    return res.sort((a, b) => a[0]+a[1]-(b[0]+b[1])).slice(0, k)
};