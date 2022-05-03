// @algorithm @lc id=100342 lang=javascript 
// @title ping-heng-er-cha-shu-lcof
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function countHeight(root) {
        if(!root) return 0
        return Math.max(countHeight(root.left), countHeight(root.right)) + 1
    }
    if(!root) return true
    return Math.abs(countHeight(root.left) - countHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};