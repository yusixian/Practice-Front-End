// @algorithm @lc id=100289 lang=javascript 
// @title dui-cheng-de-er-cha-shu-lcof
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
var isSymmetric = function(root) {
    if(!root) return true
    function isMirror(a, b) {
        if(!a && !b) return true
        else if(!a || !b) return false
        return a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left)                
    }
    return isMirror(root.left, root.right)
};