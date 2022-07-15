// @algorithm @lc id=1000319 lang=javascript 
// @title opLdQZ
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const m = new Map()
    function dfs(rt, k) {
        if(!rt) return false
        if(m.has(k-rt.val)) return true
        m.set(rt.val, true)
        return dfs(rt.left, k) || dfs(rt.right, k)
    }
    return dfs(root, k)
};