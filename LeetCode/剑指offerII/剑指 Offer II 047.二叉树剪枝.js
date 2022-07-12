// @algorithm @lc id=1000301 lang=javascript 
// @title pOCWxh
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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    function dfs(rt) {
        if(!rt) return null
        rt.left = dfs(rt.left)
        rt.right = dfs(rt.right)
        if(!rt.left && !rt.right && rt.val == 0) return null
        return rt
    }
    return dfs(root)
};