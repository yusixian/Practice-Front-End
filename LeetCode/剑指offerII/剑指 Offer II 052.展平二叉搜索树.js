// @algorithm @lc id=1000311 lang=javascript 
// @title NYBBNL
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
var increasingBST = function(root) {
    let newRoot = null
    let pa = null
    function inorder(rt) {
        if(!rt) return null
        inorder(rt.left)
        if(!newRoot) {
            newRoot = new TreeNode(rt.val)
            pa = newRoot
        } else {
            pa.right = new TreeNode(rt.val)
            pa = pa.right
        }
        inorder(rt.right)
    }
    inorder(root)
    return newRoot
};