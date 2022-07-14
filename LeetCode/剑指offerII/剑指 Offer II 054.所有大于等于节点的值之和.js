// @algorithm @lc id=1000315 lang=javascript 
// @title w6cpku
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
var convertBST = function(root) {
    let sum = 0
    function inorder(rt) {
        if(!rt) return
        inorder(rt.right)
        rt.val += sum
        sum = rt.val
        inorder(rt.left)
    }
    inorder(root, 0)
    return root
};