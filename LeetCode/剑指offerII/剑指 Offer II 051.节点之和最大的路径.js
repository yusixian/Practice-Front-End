/*
 * @Author: cos
 * @Date: 2022-07-13 21:49:13
 * @LastEditTime: 2022-07-13 22:25:11
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 051.节点之和最大的路径.js
 */
// @algorithm @lc id=1000309 lang=javascript 
// @title jC7MId
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let res = -Infinity
    function maxPath(rt) {
        if(!rt) return 0
        let [lp, rp] = [Math.max(maxPath(rt.left), 0), Math.max(maxPath(rt.right), 0)]
        res = Math.max(res, lp + rp + rt.val)
        return Math.max(lp, rp) + rt.val
    }
    maxPath(root)
    return res
};