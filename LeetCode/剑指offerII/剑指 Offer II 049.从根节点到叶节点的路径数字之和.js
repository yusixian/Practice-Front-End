// @algorithm @lc id=1000306 lang=javascript 
// @title 3Etpl5
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
var sumNumbers = function(root) {
    let sum = 0
    function dfs(rt, pre) {
        if(!rt) return pre
        if(!rt.left && !rt.right)
            sum += pre*10+rt.val
        dfs(rt.left, pre*10+rt.val)
        dfs(rt.right, pre*10+rt.val)
    }
    dfs(root, 0)
    return sum
};